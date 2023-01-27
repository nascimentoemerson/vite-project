import { useEffect, useState } from "react";
import { api } from "../../../utils/api/api";
import { colors } from "../../../utils/colors";
import { Classroom } from "../../../utils/types/data";
import { ClassroomCard } from "../../atoms/classroom-card/classroom-card";
import { Select } from "../../atoms/select/select";
import { ClassroomContentDiv, ClassroomDiv } from "../classroom/styles";

export function Classroom() {
    const [classrooms, setClassrooms] = useState<Classroom[]>([]);
    const [search, setSearch] = useState<string>("");
    const [paramToFilter, setParamToFilter] = useState<string>("name");

    console.log(JSON.parse(localStorage.getItem("user") ?? "").role);

    async function findClassrooms() {
        const data = await api.getClassrooms();
        setClassrooms(data);
    }

    const filteredClassrooms = classrooms.filter((classroom) => {
        if (paramToFilter === "name")
            return classroom.name.toUpperCase().includes(search.toUpperCase());
        if (paramToFilter === "theme")
            return classroom.theme.toUpperCase().includes(search.toUpperCase());
        if (paramToFilter === "subject")
            return classroom.subject.toUpperCase().includes(search.toUpperCase());
    });

    useEffect(() => {
        findClassrooms();
    }, []);

    console.log(search);

    return (
        <ClassroomDiv>
            <input
                type="text"
                onChange={(e) => {
                    setSearch(e.currentTarget.value);
                }}
            />
            <Select
                selectedOption={setParamToFilter}
                options={[
                    { name: "Name", value: "name" },
                    { name: "Theme", value: "theme" },
                    { name: "Subject", value: "subject" },
                ]}
            />
            <ClassroomContentDiv>
                {filteredClassrooms.map((classroom) => {
                    const color =
                        colors[Math.floor(Math.random() * colors.length - 1) + 1];
                    return (
                        <ClassroomCard
                            key={classroom.id}
                            id={classroom.id}
                            name={classroom.name}
                            theme={classroom.theme}
                            color={color}
                        />
                    );
                })}
            </ClassroomContentDiv>
        </ClassroomDiv>
    );
}