import useFields from "../../hooks/useFields";
import CustomDatePicker from "../DatePicker";

export default function InputDateTime() {
  const { schedulingData, handleChangeSchedulingData } = useFields();

  const dateValue = schedulingData.data.value
    ? new Date(schedulingData.data.value)
    : null;

  return (
    <CustomDatePicker
      value={dateValue}
      onChange={(newDate) =>
        handleChangeSchedulingData("data", newDate ? newDate.toISOString() : "")
      }
    />
  );
}
