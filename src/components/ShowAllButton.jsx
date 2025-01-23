import { Button } from "./ui/button";

const ShowAllButton = ({ onToggle, showAll }) => {
  return (
    <div>
      <Button variant="destructive" onClick={onToggle}>
        {showAll ? "Show Less" : "Show All"}
      </Button>
    </div>
  );
};

export default ShowAllButton;
