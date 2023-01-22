const { DataTypes } = require('sequelize');
const sequelize = require("../data/db");

const User = sequelize.define("user", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "User"
    }
});

const RoomType = sequelize.define("roomType", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const Room = sequelize.define("room", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    roomNum: {
        type: DataTypes.STRING,
        allowNull: false
    },
    size: {
        type: DataTypes.STRING,
        allowNull: false
    },
    capacity: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.STRING,
        allowNull: false
    },
    liked: {
        type: DataTypes.STRING,
        allowNull: true
    },
    viewed: {
        type: DataTypes.STRING,
        allowNull: true
    }
});


const Booking = sequelize.define("booking", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    checkIn: {
        type: DataTypes.DATE,
        allowNull: false
    },
    checkOut: {
        type: DataTypes.DATE,
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    check: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: "0"
    }
});

const Contact = sequelize.define("contact", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    subject: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

User.findOrCreate({ where: { name:"Admin", email: "admin@gmail.com", password: "$2b$10$.2s8SLEln9Dnql5sPuvtfec93qtcKyvMAqDY8zeLg8IcndoHNtXWS", role: "Admin" } })

RoomType.hasMany(Room, { onDelete: "cascade" });
Room.belongsTo(RoomType)

Room.hasMany(Booking, { onDelete: "cascade" });
Booking.belongsTo(Room);

User.hasMany(Booking, { onDelete: "cascade" });
Booking.belongsTo(User);

User.belongsToMany(Room, { through: 'RoomUserBooking' });
Room.belongsToMany(User, { through: 'RoomUserBooking' });

module.exports = {
    User,
    Room,
    Booking,
    Contact,
    RoomType
};