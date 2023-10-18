export const convertNameOdoo = (name) => {
  switch (true) {
    case name === "dms":
      return { name: "DMS" };

    case name === "pc":
      return { name: "PC" };

    case name === "oracle":
      return { name: "Oracle" };

    case name === "sever":
      return { name: "Server" };

    case name === "hrm":
      return { name: "HRM" };

    case name === "odoo":
      return { name: "Support Odoo" };

    case name === "maintanence":
      return { name: "Maintanence" };

    case name === "informatics_equipment":
      return { name: "Informatics Requirement" };

    case name === "network_infrastructure":
      return { name: "Network Infrastructure" };
    case name === "email":
      return { name: "Email" };
    case name === "file_sever":
      return { name: "Server" };
    default:
      return {
        name: name,
      };
  }
};
