import Wrapper from "./Wrapper";
import RDV from "./RDV";
import { useSelector } from "react-redux";
import { selectCurrentView } from "../../../redux/slice/dashboardSlice";
import Clients from "./Clients";
import Planning from "./Planning";
import CenterOverview from "./CenterOverview";
import Grenoble from "./Grenoble";
import Statistic from "./Statistic";

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
      case "Centre":
        return <CenterOverview />;
      case "Grenoble":
        return <Grenoble />;
      case "Dashboard":
        return <Statistic />;

      default:
        return `No case found`;
    }
  };
  return <Wrapper>{renderContent()}</Wrapper>;
};

export default DashboardContent;
