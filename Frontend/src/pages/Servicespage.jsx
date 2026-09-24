import WebDevelopment from '../components/Services/WebDevelopment';
import DataAnalytics from '../components/Services/DataAnalytics';
import DataScience from '../components/Services/DataScience';

const Servicespage = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <WebDevelopment />
      <DataAnalytics />
      <DataScience />
    </div>
  );
};

export default Servicespage;