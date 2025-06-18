import useFields from "../../hooks/useFields";
import useGetExamList from "../../hooks/useGetExamList";
import { Option } from "../../types/input";
import AutoComplete from "../AutoComplete";

export default function InputExam(){
    const { rows } = useGetExamList();
    const { schedulingData, handleChangeSchedulingData } = useFields();
    const options:Option[] = [];

    rows.map((row) => {
        options.push({value: row.id, text: row.name});
    })

    return <AutoComplete options={options} state={schedulingData.exam} onChange={handleChangeSchedulingData}/>
}