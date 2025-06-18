import useGetExamList from "../../hooks/useGetExamList";
import AutoComplete from "../AutoComplete";

export default function InputExam(){
    const { rows } = useGetExamList();
    const options:string[] = [];

    rows.map((row) => {
        options.push(row.name);
    })

    return <AutoComplete options={options} label='Exame'/>
}