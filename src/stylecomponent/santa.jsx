const modalStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  };
  
  const modalContentStyle = {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    width: "300px",
  };
  
  const iconsStyle = {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "20px",
  };
  
  const iconStyle = {
    cursor: "pointer",
    color: "#25D366", // WhatsApp color
  };
  
  const copyButtonStyle = {
    backgroundColor: "#4CAF50", // Green button for copy
    color: "white",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
  };
  
  const closeButtonStyle = {
    backgroundColor: "#f44336", // Red close button
    color: "white",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
  };
    export { modalStyle, modalContentStyle, iconsStyle, iconStyle, copyButtonStyle, closeButtonStyle };

