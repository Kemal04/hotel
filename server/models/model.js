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


RoomType.hasMany(Room, { onDelete: "cascade" });
Room.belongsTo(RoomType)

Room.hasMany(Booking, { onDelete: "cascade" });
Booking.belongsTo(Room);

User.hasMany(Booking, { onDelete: "cascade" });
Booking.belongsTo(User);


module.exports = {
    User,
    Room,
    Booking,
    Contact,
    RoomType
};