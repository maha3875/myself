import { AutomationDemo } from '../types';

export const automationDemos: AutomationDemo[] = [
  {
    id: "demo-apps-script",
    title: "Google Apps Script: Automated Certificate & Email Engine",
    badge: "Most Popular in Schools",
    platform: "Google Apps Script",
    demoType: "sheets-workflow",
    problem: "Staff spent days generating certificates of achievement one by one in Word, saving as PDF, and attaching manually to emails.",
    solution: "A headless Apps Script workflow that monitors Form submissions or Sheet rows, merges data onto an SVG/Docs template, renders a PDF, and dispatches via Gmail API.",
    timeSaved: "20 hours → 45 seconds",
    manualDuration: 1200, // 20 hours in minutes
    automatedDuration: 45, // 45 seconds
    simulatedActionName: "Execute Apps Script Trigger",
    snippet: `function onFormSubmitTrigger(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const row = e.range.getRow();
  const [timestamp, name, course, score, email] = sheet.getRange(row, 1, 1, 5).getValues()[0];
  
  // Create certificate from template
  const templateDoc = DriveApp.getFileById('TEMPLATE_DOC_ID');
  const tempFile = templateDoc.makeCopy(\`Certificate - \${name}\`);
  const body = DocumentApp.openById(tempFile.getId()).getBody();
  
  body.replaceText('{{STUDENT_NAME}}', name);
  body.replaceText('{{COURSE}}', course);
  body.replaceText('{{SCORE}}', score + '%');
  body.replaceText('{{DATE}}', Utilities.formatDate(new Date(), "IST", "dd/MM/yyyy"));
  
  const pdfBlob = tempFile.getAs('application/pdf');
  GmailApp.sendEmail(email, 'Congratulations! Your Certificate is Ready', 
    \`Dear \${name},\\n\\nPlease find your course completion certificate attached.\`, {
      attachments: [pdfBlob],
      name: 'Academic Automation Office'
    }
  );
  tempFile.setTrashed(true);
  sheet.getRange(row, 6).setValue('SENT: ' + new Date().toISOString());
}`
  },
  {
    id: "demo-vba-optimizer",
    title: "Excel VBA Macro: Institutional Marksheet Aggregator",
    badge: "Zero Math Errors",
    platform: "Excel VBA",
    demoType: "vba-optimizer",
    problem: "Teachers had to consolidate 12 different subject workbooks, cross-reference student roll numbers, calculate rank percentiles, and format for print.",
    solution: "An optimized Visual Basic for Applications (VBA) macro that programmatically merges all 12 workbooks, handles absent flags, calculates ranks, and applies conditional formatting in under 3 seconds.",
    timeSaved: "14 hours → 2.5 seconds",
    manualDuration: 840,
    automatedDuration: 3,
    simulatedActionName: "Run VBA Macro Engine",
    snippet: `Sub CompileStudentRanks()
    Dim wsMaster As Worksheet, wbSource As Workbook
    Dim lastRow As Long, i As Long
    Application.ScreenUpdating = False
    Application.Calculation = xlCalculationManual

    Set wsMaster = ThisWorkbook.Sheets("Consolidated")
    lastRow = wsMaster.Cells(wsMaster.Rows.Count, "A").End(xlUp).Row

    For i = 2 To lastRow
        ' Compute total scores and validate minimum pass marks (35)
        Dim math As Double, sci As Double, eng As Double
        math = wsMaster.Cells(i, 3).Value
        sci = wsMaster.Cells(i, 4).Value
        eng = wsMaster.Cells(i, 5).Value

        wsMaster.Cells(i, 6).Value = math + sci + eng
        If math >= 35 And sci >= 35 And eng >= 35 Then
            wsMaster.Cells(i, 7).Value = "PASSED"
            wsMaster.Cells(i, 7).Interior.Color = RGB(220, 252, 231)
        Else
            wsMaster.Cells(i, 7).Value = "SUPPLEMENTARY"
            wsMaster.Cells(i, 7).Interior.Color = RGB(254, 226, 226)
        End If
    Next i

    ' Apply Dynamic Percentile Ranking
    wsMaster.Range("H2:H" & lastRow).Formula = "=RANK.EQ(F2, $F$2:$F$" & lastRow & ")"
    Application.Calculation = xlCalculationAutomatic
    Application.ScreenUpdating = True
    MsgBox "Compiled " & (lastRow - 1) & " student records in 2.1s!", vbInformation
End Sub`
  },
  {
    id: "demo-python-pipeline",
    title: "Python Data Pipeline: Raw Log Scraper & Anomaly Detector",
    badge: "High Throughput",
    platform: "Python",
    demoType: "python-pipeline",
    problem: "Campus firewall and proxy logs (tens of thousands of lines) had to be inspected manually for unauthorized traffic and bandwidth hogs.",
    solution: "Python script using Pandas and regex to stream server logs, aggregate bandwidth by IP and MAC address, flag anomalous traffic spikes, and email daily executive summaries.",
    timeSaved: "6 hours daily → 12 seconds",
    manualDuration: 360,
    automatedDuration: 12,
    simulatedActionName: "Execute Python Pipeline",
    snippet: `import re
import pandas as pd
from datetime import datetime

def analyze_traffic_logs(log_filepath):
    log_pattern = r'(\\d+\\.\\d+\\.\\d+\\.\\d+) - - \\[(.*?)\\] "(.*?)" (\\d+) (\\d+)'
    parsed_entries = []

    with open(log_filepath, 'r') as file:
        for line in file:
            match = re.match(log_pattern, line)
            if match:
                ip, timestamp, request, status, bytes_sent = match.groups()
                parsed_entries.append({
                    'ip': ip,
                    'timestamp': datetime.strptime(timestamp, '%d/%b/%Y:%H:%M:%S %z'),
                    'request': request,
                    'status': int(status),
                    'megabytes': int(bytes_sent) / (1024 * 1024)
                })

    df = pd.DataFrame(parsed_entries)
    anomalies = df[df['megabytes'] > 250] # Flag users downloading >250MB in single session
    top_consumers = df.groupby('ip')['megabytes'].sum().sort_values(ascending=False).head(5)
    
    return {
        'total_traffic_gb': round(df['megabytes'].sum() / 1024, 2),
        'flagged_anomalies': len(anomalies),
        'top_hosts': top_consumers.to_dict()
    }`
  },
  {
    id: "demo-notification-dispatcher",
    title: "Multi-Channel Alert Dispatcher (WhatsApp / SMS / Webhook)",
    badge: "Real-time Gateway",
    platform: "REST API / Webhook",
    demoType: "notification-dispatcher",
    problem: "When students are absent or servers drop offline, manual phone calls took hours and often failed to reach guardians in time.",
    solution: "Asynchronous webhook dispatcher that sends templated, localized WhatsApp and SMS notifications with delivery acknowledgements.",
    timeSaved: "3 hours daily → Realtime (<1s)",
    manualDuration: 180,
    automatedDuration: 1,
    simulatedActionName: "Trigger Live Webhook Dispatch",
    snippet: `async function dispatchParentAlert({ studentName, parentPhone, status, date }) {
  const payload = {
    messaging_product: "whatsapp",
    to: \`91\${parentPhone}\`,
    type: "template",
    template: {
      name: "daily_attendance_update",
      language: { code: "ta" }, // Bilingual: Tamil & English
      components: [{
        type: "body",
        parameters: [
          { type: "text", text: studentName },
          { type: "text", text: status },
          { type: "text", text: date },
          { type: "text", text: "School Administration Office" }
        ]
      }]
    }
  };

  const response = await fetch("https://graph.facebook.com/v19.0/PHONE_ID/messages", {
    method: "POST",
    headers: {
      "Authorization": "Bearer SECURE_TOKEN",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });
  return await response.json();
}`
  }
];

