import Wrapper from "./Wrapper";
import RDV from "./RDV";
import { useSelector } from "react-redux";
import { selectCurrentView } from "../../../redux/slice/dashboardSlice";
import Clients from "./Clients";
import Planning from "./Planning";

const DashboardContent = () => {
  const currentView = useSelector(selectCurrentView);

  const renderContent = () => {
    switch (currentView) {
      case "RDV":
        return <RDV />;
      case "Clients":
        return <Clients />;
      case "Planning":
        return <Planning />;

      default:
        return `No case found`;
    }
  };
  return <Wrapper>{renderContent()}</Wrapper>;
};

export default DashboardContent;
