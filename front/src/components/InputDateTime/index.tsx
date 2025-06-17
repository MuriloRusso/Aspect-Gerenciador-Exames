import useFields from "../../hooks/useFields";
import CustomDatePicker from "../DatePicker";

export default function InputDateTime() {
  const { schedulingData, handleChangeSchedulingData } = useFields();
  return (
    <CustomDatePicker
      state={schedulingData.data}
      onChange={(newDate) =>
        handleChangeSchedulingData("data", newDate ? newDate.toISOString() : "")
      }
    />
  );
}
