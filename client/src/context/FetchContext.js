import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const FetchContext = createContext("");

export function FetchContextProvider({ children }) {

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchAllContacts = async () => {
            try {
                const res = await axios.get('http://localhost:3001/api/contact/')
                setContacts(res.data.contact);
            } catch (err) {
                console.log(err)
            }
        };
        fetchAllContacts()

    }, []);

    const [roomtypes, setRoomTypes] = useState([])

    useEffect(() => {
        const fetchRoomTypes = async () => {
            try {
                const res = await axios.get('http://localhost:3001/api/roomtypes/')
                setRoomTypes(res.data.roomtypes)
            } catch (err) {
                console.log(err)
            }
        }
        fetchRoomTypes()
    }, [])

    const [rooms, setRooms] = useState([])

    useEffect(() => {
        const fetchAllRooms = async () => {
            try {
                const res = await axios.get('http://localhost:3001/api/rooms/')
                setRooms(res.data.rooms)
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllRooms()
    }, [])

    const [booking, setBooking] = useState([])

    useEffect(() => {
        const fetchAllBooking = async () => {
            try {
                const res = await axios.get('http://localhost:3001/api/bookings/')
                setBooking(res.data.booking)
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllBooking()
    }, [])

    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchAllUsers = async () => {
            try {
                const res = await axios.get('http://localhost:3001/api/users/')
                setUsers(res.data.users)
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllUsers()
    }, [])

    return (
        <FetchContext.Provider value={{ contacts, rooms, setRooms, roomtypes, booking, users }} >
            {children}
        </FetchContext.Provider>
    );
}

export function useAPI() {
    const context = useContext(FetchContext);
    if (context === undefined) {
        throw new Error("Context must be used within a Provider");
    }
    return context;
}