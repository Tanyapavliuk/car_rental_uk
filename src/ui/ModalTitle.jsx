import PropTypes from "prop-types";
export const ModalTitle = ({ className = "", children }) => {
  return (
    <p
      className={`text-neutral-900 text-sm manrope leading-tight ${className}`}
    >
      {children}
    </p>
  );
};

ModalTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
