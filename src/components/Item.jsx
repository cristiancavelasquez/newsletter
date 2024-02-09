import check from "../assets/images/icon-list.svg";

export const Item = ({ children }) => {
  return (
    <div className="flex gap-3 lg:items-center items-start">
      <img src={check} />
      <p className="text-wrap">{children}</p>
    </div>
  );
};
