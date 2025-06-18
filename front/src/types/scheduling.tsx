import { Exam } from "./exam";
import { inputProps } from "./input";

export type Scheduling = {
  id: number;
  exam: Exam;
  date_time: string;
  informations: string;
  created_at: string;
  updated_at: string;
};


export type SchedulingData = {
    data: inputProps;
    time: inputProps;
    exam: inputProps;
}