import { format, parseISO } from "date-fns";

type Optional = {
  className?: string;
};
type Created = {
  created: string;
  updated?: never;
};
type Updated = {
  created?: never;
  updated: string;
};

type Props = (Created | Updated) & Optional;

const Date = ({ created, updated }: Props) => {
  const date = created ?? updated;
  if (!date) throw Error("Date component requires 1 date to be present");

  const label = created ? "Created: " : "Updated: ";
  const prettyDate = format(parseISO(date), "LLL d, yyyy");
  return (
    <div>
      {label}
      <time dateTime={date}>{prettyDate}</time>
    </div>
  );
};

export default Date;
