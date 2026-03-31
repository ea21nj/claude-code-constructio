const pptxgen = require("pptxgenjs");

let pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.author = 'Erik Andersson';
pres.title = 'Claude Code for Construction - Operations Deck';

// Color palette
const colors = {
  dark: "0B0D11",
  surface: "131620",
  accent: "C96442",
  text: "F2EEE9",
  lightText: "7A7E8C",
  white: "FFFFFF"
};

// ===== SLIDE 1: Title Slide =====
let slide1 = pres.addSlide();
slide1.background = { color: colors.dark };

slide1.addText("CONSTRUCTION EXECUTION SYSTEMS", {
  x: 0.5, y: 0.6, w: 9, h: 0.4,
  fontSize: 12, bold: true, color: colors.lightText,
  align: "left", fontFace: "Calibri"
});

slide1.addText([
  { text: "Turn ", options: { color: colors.text } },
  { text: "Workflows ", options: { color: colors.accent, bold: true } },
  { text: "Into Custom Tools", options: { color: colors.text } }
], {
  x: 0.5, y: 1.3, w: 9, h: 1.2,
  fontSize: 54, bold: true, align: "left", fontFace: "Calibri",
  valign: "top"
});

slide1.addText("No code. Real problems. Built for construction teams.", {
  x: 0.5, y: 2.8, w: 9, h: 0.5,
  fontSize: 18, color: colors.lightText, align: "left", fontFace: "Calibri"
});

slide1.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 3.6, w: 2, h: 0.05,
  fill: { color: colors.accent }, line: { type: "none" }
});

slide1.addText("Eligeo", {
  x: 0.5, y: 4.0, w: 9, h: 0.3,
  fontSize: 11, color: colors.lightText, align: "left", fontFace: "Calibri", italic: true
});

// ===== SLIDE 2: Problem Statement =====
let slide2 = pres.addSlide();
slide2.background = { color: colors.dark };

slide2.addText("Workflows Are", {
  x: 0.5, y: 0.6, w: 4, h: 0.5,
  fontSize: 44, bold: true, color: colors.text, align: "left", fontFace: "Calibri"
});

slide2.addText("Broken", {
  x: 0.5, y: 1.1, w: 4, h: 0.6,
  fontSize: 44, bold: true, color: colors.accent, align: "left", fontFace: "Calibri"
});

const problemPoints = [
  "Workflows break across tools — teams lose context and spend time copy-pasting.",
  "Someone owns the system, but nobody owns the workflow.",
  "RFI, change order, and submittal processes get bottlenecked by manual handoffs.",
  "Data lives in spreadsheets, emails, and someone's head.",
  "Teams don't have visibility until something goes wrong."
];

let problemText = problemPoints.map((point, idx) => ({
  text: point,
  options: { bullet: true, breakLine: idx < problemPoints.length - 1 }
}));

slide2.addText(problemText, {
  x: 0.5, y: 2.2, w: 9, h: 3,
  fontSize: 14, color: colors.text, align: "left", fontFace: "Calibri",
  valign: "top"
});

// ===== SLIDE 3: The Opportunity (4 Cards) =====
let slide3 = pres.addSlide();
slide3.background = { color: colors.dark };

slide3.addText("What Changed", {
  x: 0.5, y: 0.5, w: 9, h: 0.5,
  fontSize: 40, bold: true, color: colors.text, align: "left", fontFace: "Calibri"
});

const cardTitles = ["No Code Required", "Real Problems", "Speed", "Structure"];
const cardDescriptions = [
  "Non-technical ops teams build and iterate themselves.",
  "We solve construction problems, not generic workflow problems.",
  "4-week implementation. Custom tools live in your monday.com workspace.",
  "Clear framework. Repeatable approach across RFI, CO, Submittals, and more."
];

const cardStartX = 0.5;
const cardWidth = 2.1;
const cardHeight = 1.8;
const cardGap = 0.3;
const cardStartY = 1.3;

for (let i = 0; i < 4; i++) {
  const x = cardStartX + (i % 2) * (cardWidth + cardGap);
  const y = cardStartY + Math.floor(i / 2) * (cardHeight + cardGap);

  slide3.addShape(pres.shapes.RECTANGLE, {
    x: x, y: y, w: cardWidth, h: cardHeight,
    fill: { color: colors.surface },
    line: { color: colors.accent, width: 2 }
  });

  slide3.addText(cardTitles[i], {
    x: x + 0.15, y: y + 0.15, w: cardWidth - 0.3, h: 0.4,
    fontSize: 13, bold: true, color: colors.accent, fontFace: "Calibri"
  });

  slide3.addText(cardDescriptions[i], {
    x: x + 0.15, y: y + 0.65, w: cardWidth - 0.3, h: 1,
    fontSize: 10, color: colors.text, fontFace: "Calibri", valign: "top"
  });
}

// ===== SLIDE 4: Four Workflows =====
let slide4 = pres.addSlide();
slide4.background = { color: colors.dark };

slide4.addText("Four Workflows + 12 Prompts", {
  x: 0.5, y: 0.5, w: 9, h: 0.5,
  fontSize: 40, bold: true, color: colors.text, align: "left", fontFace: "Calibri"
});

const workflows = [
  { title: "Discovery & Problem Framing", desc: "Identify the workflow and map current state." },
  { title: "Tool Builder", desc: "Design the custom tool structure in monday.com." },
  { title: "Dashboards & Portals", desc: "Create real-time visibility for field and office teams." },
  { title: "Training & Rollout", desc: "Operationalize the tool with your team." }
];

const wfStartY = 1.3;
const wfHeight = 0.85;
const wfGap = 0.1;

for (let i = 0; i < 4; i++) {
  const y = wfStartY + i * (wfHeight + wfGap);

  slide4.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: y, w: 0.08, h: wfHeight,
    fill: { color: colors.accent }, line: { type: "none" }
  });

  slide4.addText(workflows[i].title, {
    x: 0.7, y: y, w: 4, h: 0.35,
    fontSize: 12, bold: true, color: colors.accent, fontFace: "Calibri"
  });

  slide4.addText(workflows[i].desc, {
    x: 0.7, y: y + 0.4, w: 8.8, h: 0.35,
    fontSize: 11, color: colors.lightText, fontFace: "Calibri"
  });
}

// ===== SLIDE 5: Real Example (RFI) =====
let slide5 = pres.addSlide();
slide5.background = { color: colors.dark };

slide5.addText("Real Example:", {
  x: 0.5, y: 0.5, w: 4, h: 0.4,
  fontSize: 32, bold: true, color: colors.text, fontFace: "Calibri"
});

slide5.addText("RFI Workflow", {
  x: 0.5, y: 0.95, w: 4, h: 0.5,
  fontSize: 40, bold: true, color: colors.accent, fontFace: "Calibri"
});

const rfiText = "Central hub for RFI creation, routing, execution, and closeout. Automatic triggers notify teams. Dashboards show status, age, and ownership. Field crews submit directly from the board.";

slide5.addText(rfiText, {
  x: 0.5, y: 1.65, w: 4.3, h: 3.4,
  fontSize: 12, color: colors.text, fontFace: "Calibri", valign: "top"
});

// Timeline on the right
const timelineX = 5.2;
const timelineY = 1.3;
const timelineItems = [
  { week: "Week 1", text: "Scope & design" },
  { week: "Week 2", text: "Build & test" },
  { week: "Week 3", text: "Train team" },
  { week: "Week 4", text: "Go live" }
];

slide5.addText("4-Week Implementation", {
  x: timelineX, y: timelineY - 0.5, w: 4, h: 0.4,
  fontSize: 13, bold: true, color: colors.accent, fontFace: "Calibri"
});

for (let i = 0; i < timelineItems.length; i++) {
  const itemY = timelineY + i * 0.85;

  slide5.addShape(pres.shapes.OVAL, {
    x: timelineX, y: itemY, w: 0.35, h: 0.35,
    fill: { color: colors.accent }, line: { type: "none" }
  });

  slide5.addText(String(i + 1), {
    x: timelineX, y: itemY, w: 0.35, h: 0.35,
    fontSize: 14, bold: true, color: colors.dark, align: "center", valign: "middle", fontFace: "Calibri"
  });

  slide5.addText(timelineItems[i].week, {
    x: timelineX + 0.5, y: itemY, w: 1.5, h: 0.2,
    fontSize: 11, bold: true, color: colors.text, fontFace: "Calibri"
  });

  slide5.addText(timelineItems[i].text, {
    x: timelineX + 0.5, y: itemY + 0.22, w: 3.2, h: 0.3,
    fontSize: 10, color: colors.lightText, fontFace: "Calibri"
  });

  if (i < timelineItems.length - 1) {
    slide5.addShape(pres.shapes.LINE, {
      x: timelineX + 0.175, y: itemY + 0.35, w: 0, h: 0.5,
      line: { color: colors.lightText, width: 1 }
    });
  }
}

// ===== SLIDE 6: Call to Action =====
let slide6 = pres.addSlide();
slide6.background = { color: colors.dark };

slide6.addText("Pick One", {
  x: 0.5, y: 1.2, w: 9, h: 0.7,
  fontSize: 54, bold: true, color: colors.accent, align: "center", fontFace: "Calibri"
});

slide6.addText("Start with RFI, submittals, change orders, or any workflow that's broken right now.", {
  x: 1, y: 2.2, w: 8, h: 1.2,
  fontSize: 18, color: colors.text, align: "center", fontFace: "Calibri", valign: "top"
});

slide6.addText("In 4 weeks, you'll have a custom tool that actually solves the problem.", {
  x: 1, y: 3.5, w: 8, h: 0.6,
  fontSize: 16, color: colors.lightText, align: "center", italic: true, fontFace: "Calibri"
});

// ===== SLIDE 7: Closing =====
let slide7 = pres.addSlide();
slide7.background = { color: colors.dark };

slide7.addText("Your ", {
  x: 0.5, y: 1.5, w: 9, h: 0.6,
  fontSize: 48, bold: true, color: colors.text, align: "center", fontFace: "Calibri"
});

slide7.addText("Judgment", {
  x: 0.5, y: 2.1, w: 9, h: 0.6,
  fontSize: 48, bold: true, color: colors.accent, align: "center", fontFace: "Calibri"
});

slide7.addText("Wins", {
  x: 0.5, y: 2.7, w: 9, h: 0.6,
  fontSize: 48, bold: true, color: colors.text, align: "center", fontFace: "Calibri"
});

slide7.addText("We don't tell you how to run construction. You do. Our tools execute your judgment at scale.", {
  x: 1, y: 3.8, w: 8, h: 1,
  fontSize: 14, color: colors.lightText, align: "center", fontFace: "Calibri", valign: "top"
});

slide7.addShape(pres.shapes.RECTANGLE, {
  x: 4.5, y: 4.9, w: 1, h: 0.05,
  fill: { color: colors.accent }, line: { type: "none" }
});

// Write the file
pres.writeFile({ fileName: "/sessions/laughing-determined-wright/mnt/Outreach & Content/claude-code-construction.pptx" });
console.log("PowerPoint presentation created successfully!");
