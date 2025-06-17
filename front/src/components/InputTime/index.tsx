import useFields from "../../hooks/useFields";
import CustomTimePicker from "../TimePicker";

export default function InputTime() {
  const { schedulingData, handleChangeSchedulingData } = useFields();
  return (
    <CustomTimePicker
      state={schedulingData.time}
      onChange={(newTime) =>
        handleChangeSchedulingData("time", newTime ? newTime.toISOString() : "")
      }
    />
  );
}
