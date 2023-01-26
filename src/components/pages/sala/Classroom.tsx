import { useState, useEffect } from "react";
import { api } from "../../../utils/api/api";

export type classroom = {
    id: string;
    name: string;
    subject: string;
    theme: string;
};

export function Classroom() {
    const [classrooms, setClassrooms] = useState<classroom[]>([])
    const [search, setSearch] = useState("")
    const [sortedClassrooms, setSortedClassrooms] = useState<classroom[]>([])

    async function findClassrooms() {
        const classes = await api.getClassrooms()
        setClassrooms(classes)
    }

    useEffect(() => {
        console.log("rodou useEffect");
        findClassrooms();
    }, []);

    useEffect(() => {
        setSortedClassrooms(classrooms.filter(classroom => classroom.name.includes(search)))
    }, [search])

    console.log(classrooms)

    return (
        <div>
            <h2>Clasroom</h2>
            <input type="text" onChange={(e) => {
                setSearch(e.currentTarget.value)
            }}
            placeholder="Search"
            />
            {
                classrooms.map((classroom) => (
                    <div key={classroom.id}>
                        <h2>{classroom.name}</h2>
                        <p>{classroom.subject}</p>
                    </div>
                ))
            }

        </div>
    );
}