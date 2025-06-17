import useFields from "../../hooks/useFields";
import CustomTimePicker from "../TimePicker";

export default function InputTime() {
  const { schedulingData, handleChangeSchedulingData } = useFields();
  return (
    <CustomTimePicker
      state={schedulingData.data}
      onChange={(newTime) =>
        handleChangeSchedulingData("data", newTime ? newTime.toISOString() : "")
      }
    />
  );
}
