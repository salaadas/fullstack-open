const Notification = ({ msg, name }) =>
  msg === null ? null : <div className={name}>{msg}</div>;

export default Notification;
