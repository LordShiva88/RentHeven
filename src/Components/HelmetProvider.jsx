import { Helmet } from "react-helmet";
const HelmetProvider = ({title}) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default HelmetProvider;
