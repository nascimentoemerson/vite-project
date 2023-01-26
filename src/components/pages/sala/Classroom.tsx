import { FormEvent, useEffect, useState } from "react";
import { Select } from "../../atoms/select/select";
import { ClickedButton } from "./styles";
import { Card } from "../../atoms/card/card";
import { api } from "../../../utils/api/api";
import { Form, InputProps } from "../../atoms/form/form";
import { CreateClassroomForm } from "../../moleculas/create-classroom-form/create-classroom-form";
import AttendancesList from "../../moleculas/attendances-lists/attendances-lists";

export type classroom = {
    id: string;
    name: string;
    subject: string;
    theme: string;
};

export type attendancePayload = {
    id: string;
    classroomId: string;
    startDate: string;
    endDate: string;
    day: string;
    students: [];
};

export function Classroom() {
    const [classrooms, setClassrooms] = useState<classroom[]>([]);
    const [selectedClassroom, setSelectedClassroom] = useState<
        string | undefined
    >();
    const [control, setControl] = useState<boolean>(false);

    async function findClassrooms() {
        const data = await api.getClassrooms();
        setClassrooms(data);
    }

    function getSelectedClassroom(value: string) {
        setSelectedClassroom(value);
    }

    function handleControl() {
        setControl(!control);
    }

    useEffect(() => {
        findClassrooms();
    }, [control]);


    return (
        <div>
            <h2>Clasrooms</h2>
            <Select
                options={classrooms.map((classroom) => {
                    return { name: classroom.name, value: classroom.id };
                })}
                selectedOption={getSelectedClassroom}
            />
            <CreateClassroomForm handleControl={handleControl} />
            <AttendancesList selectedClassroom={selectedClassroom} />
        </div>
    );
}