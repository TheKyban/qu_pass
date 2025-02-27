// EDIT EXISTING ROWS
function editExistingRow() {
  let today = new Date();

  // Subtract one day from today
  let yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  const rows = document.getElementsByClassName("ui-row-ltr");
  rows[0].setAttribute(
    "style",
    "color: rgb(0, 0, 0); background: rgb(163,247,135);"
  );

  // TD
  const TDS = rows[0].getElementsByTagName("td");

  // STATUS
  TDS[9].innerText = "Approved";

  //   FROM
  TDS[10].innerText = `${today.toLocaleDateString("en-GB", {
    numeric: "2-digit",
  })} 07:00 AM`;

  // TO
  TDS[11].innerText = `${today.toLocaleDateString("en-GB", {
    numeric: "2-digit",
  })} 07:00 PM`;

  // APPLY
  TDS[16].innerText = `${today.toLocaleDateString("en-GB", {
    numeric: "2-digit",
  })} 08:00 PM`;

  // Accept Date
  TDS[21].innerText = yesterday.toLocaleDateString("en-GB", {
    numeric: "2-digit",
  });
  TDS[22].innerText = "";

  // Apply date
  TDS[31].innerText = `${yesterday.toLocaleDateString("en-GB", {
    numeric: "2-digit",
  })} 07:00 PM`;
}

// ADD NEW ROW
function addNewRow() {
  let today = new Date();

  let yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  const rows = document.getElementsByClassName("ui-row-ltr");
  const firstRow = document.querySelector(".jqgfirstrow");
  // prettier-ignore
  const data = `<tr role="row" id="1" tabindex="-1" class="jqgrow ui-row-ltr ui-widget-content" style="color: rgb(0, 0, 0); background: rgb(163, 247, 135);"><td role="gridcell" class="jqgrid-rownum ui-state-default" style="text-align:center;width: 35px;" title="1" aria-describedby="jqgrdLeave_rn">1</td><td role="gridcell" style="text-align:left;display:none;" title="149336" aria-describedby="jqgrdLeave_LAID">149336</td><td role="gridcell" style="text-align:center;" title="81047" aria-describedby="jqgrdLeave_SRNo">${Number(rows?.[0].getElementsByTagName("td")[2].innerText)+199}</td><td role="gridcell" style="text-align:center;display:none;" title="24510003" aria-describedby="jqgrdLeave_StudentID">24510003</td><td role="gridcell" style="text-align:left;display:none;" title="ADITYA KUMAR " aria-describedby="jqgrdLeave_StudentName">ADITYA KUMAR </td><td role="gridcell" style="text-align:left;display:none;" title="QST" aria-describedby="jqgrdLeave_Acronym">QST</td><td role="gridcell" style="text-align:center;display:none;" title="Master of Computer Applications" aria-describedby="jqgrdLeave_Course">Master of Computer Applications</td><td role="gridcell" style="text-align:center;display:none;" title="1" aria-describedby="jqgrdLeave_YearSem">1</td><td role="gridcell" style="text-align:center;display:none;" title="" aria-describedby="jqgrdLeave_Branch">&nbsp;</td><td role="gridcell" style="text-align:center;" title="Approved" aria-describedby="jqgrdLeave_Status">Approved</td><td role="gridcell" style="text-align:center;" title="01/12/2024 07:00 AM" aria-describedby="jqgrdLeave_DateTimeFrom">${today.toLocaleDateString("en-GB",{ numeric: "2-digit" })} 07:00 AM</td><td role="gridcell" style="text-align:center;" title="01/12/2024 07:00 AM" aria-describedby="jqgrdLeave_DateTimeTo">${today.toLocaleDateString("en-GB",{ numeric: "2-digit" })} 07:00 PM</td><td role="gridcell" style="text-align:center;" title="7479796212" aria-describedby="jqgrdLeave_ContactNo">${rows?.[0].getElementsByTagName("td")[12].innerText}</td><td role="gridcell" style="text-align:left;" title="Chhutmulpur" aria-describedby="jqgrdLeave_Address">Chhutmulpur</td><td role="gridcell" style="text-align:left;" title="" aria-describedby="jqgrdLeave_Relation">${rows?.[0].getElementsByTagName("td")[14].innerText}</td><td role="gridcell" style="text-align:center;" title="9044002069" aria-describedby="jqgrdLeave_RelationContactNo">${rows?.[0].getElementsByTagName("td")[15].innerText}</td><td role="gridcell" style="text-align:center;" title="01/12/2024 07:00 PM" aria-describedby="jqgrdLeave_HostelReturnDateTime">${today.toLocaleDateString("en-GB",{ numeric: "2-digit" })} 08:00 PM</td><td role="gridcell" style="text-align:left;" title="" aria-describedby="jqgrdLeave_CCApprovedRejectedBy">&nbsp;</td><td role="gridcell" style="text-align:center;" title="" aria-describedby="jqgrdLeave_CCApprovedRejectedDate">&nbsp;</td><td role="gridcell" style="text-align:left;" title="" aria-describedby="jqgrdLeave_RemarkClassCoordinator">&nbsp;</td><td role="gridcell" style="text-align:left;" title="AKASH  SINGH " aria-describedby="jqgrdLeave_HODWardenApprovedRejectedBy">${rows?.[0].getElementsByTagName("td")[20].innerText}</td><td role="gridcell" style="text-align:center;" title="01/12/2024" aria-describedby="jqgrdLeave_HODWardenApprovedRejectedDate">${today.toLocaleDateString("en-GB",{ numeric: "2-digit" })}</td><td role="gridcell" style="text-align:left;" title="" aria-describedby="jqgrdLeave_RemarkHODWarden"></td><td role="gridcell" style="text-align:center;" title=" " aria-describedby="jqgrdLeave_OutEntryDate"> </td><td role="gridcell" style="text-align:center;" title=" " aria-describedby="jqgrdLeave_InEntryDate"> </td><td role="gridcell" style="text-align:left;" title="" aria-describedby="jqgrdLeave_OutEntryBy">&nbsp;</td><td role="gridcell" style="text-align:left;" title="" aria-describedby="jqgrdLeave_InEntryBy">&nbsp;</td><td role="gridcell" style="text-align:center;" title=" " aria-describedby="jqgrdLeave_WardenOutEntryDate"> </td><td role="gridcell" style="text-align:center;" title=" " aria-describedby="jqgrdLeave_WardenInEntryDate"> </td><td role="gridcell" style="text-align:left;" title="" aria-describedby="jqgrdLeave_WardenOutEntryBy">&nbsp;</td><td role="gridcell" style="text-align:left;" title="" aria-describedby="jqgrdLeave_WardenInEntryBy">&nbsp;</td><td role="gridcell" style="text-align:center;" title="30/11/2024 7:55PM" aria-describedby="jqgrdLeave_ApplyDate"> ${yesterday.toLocaleDateString("en-GB",{ numeric: "2-digit" })} 07:55 PM</td><td role="gridcell" style="text-align:center;display:none;" title="07:00 AM" aria-describedby="jqgrdLeave_TimeFromAMPM">07:00 AM</td><td role="gridcell" style="text-align:center;display:none;" title="07:00 PM" aria-describedby="jqgrdLeave_TimeToAMPM">07:00 PM</td><td role="gridcell" style="text-align:center;display:none;" title="01/12/2024" aria-describedby="jqgrdLeave_DateFrom">01/12/2024</td><td role="gridcell" style="text-align:center;display:none;" title="01/12/2024" aria-describedby="jqgrdLeave_DateTo">01/12/2024</td><td role="gridcell" style="text-align:center;display:none;" title="07:00" aria-describedby="jqgrdLeave_TimeFrom">07:00</td><td role="gridcell" style="text-align:center;display:none;" title="07:00" aria-describedby="jqgrdLeave_TimeTo">07:00</td><td role="gridcell" style="text-align:left;display:none;" title="0" aria-describedby="jqgrdLeave_IsCCApprovedRejected">0</td><td role="gridcell" style="text-align:left;display:none;" title="1" aria-describedby="jqgrdLeave_IsHODWardenApprovedRejected">1</td><td role="gridcell" style="text-align:left;display:none;" title="0" aria-describedby="jqgrdLeave_CCApprovedRejectedID">0</td><td role="gridcell" style="text-align:left;display:none;" title="926" aria-describedby="jqgrdLeave_HODWardenApprovedRejectedID">926</td><td role="gridcell" style="text-align:left;display:none;" title="1" aria-describedby="jqgrdLeave_AMPMFrom">1</td><td role="gridcell" style="text-align:left;display:none;" title="2" aria-describedby="jqgrdLeave_AMPMTo">2</td><td role="gridcell" style="text-align:left;display:none;" title="8735" aria-describedby="jqgrdLeave_RegID">8735</td><td role="gridcell" style="text-align:left;display:none;" title="01/12/2024" aria-describedby="jqgrdLeave_HostelReturnDate">01/12/2024</td><td role="gridcell" style="text-align:left;display:none;" title="07:00" aria-describedby="jqgrdLeave_HostelReturnTime">07:00</td><td role="gridcell" style="text-align:left;display:none;" title="2" aria-describedby="jqgrdLeave_HostelReturnAMPM">2</td></tr>`;
  Array.from(rows).forEach((element, idx) => {
    const el = element.getElementsByTagName("td")[0];
    el.title = idx + 2;
    el.innerText = idx + 2;
  });
  rows[0].insertAdjacentHTML("beforebegin", data);
}

console.log("Extension's Content script loaded successfully");
function handleAction(msg) {
  if (msg.action === "newRow") {
    addNewRow();
  } else if (msg.action === "old") {
    editExistingRow();
  }
}

if (typeof browser !== "undefined") {
  browser.runtime.onMessage.addListener((msg, sender, res) => {
    handleAction(msg);
  });
} else {
  chrome.runtime.onMessage.addListener((msg, sender, res) => {
    handleAction(msg);
  });
}

function initializeObserver() {
  const observer = new MutationObserver((mutationsList, observer) => {
    const rows = document.getElementsByClassName("ui-row-ltr");
    if (rows.length > 0) {
      console.log("Rows are now available. Adding new row...");
      // addNewRow();
      editExistingRow();
      observer.disconnect();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

// Automatically add a new row when the page is loaded
window.addEventListener("load", function () {
  console.log("Page loaded. Initializing observer...");
  initializeObserver();
});
