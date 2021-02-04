function ExecuteScript(strId)
{
  switch (strId)
  {
      case "60y9IvNJUKB":
        Script1();
        break;
      case "5gcnqsMAkKs":
        Script2();
        break;
      case "6187rm8wFwd":
        Script3();
        break;
      case "5kL8cY3okAX":
        Script4();
        break;
      case "6K4RNbDo7gb":
        Script5();
        break;
      case "61Zvvetngov":
        Script6();
        break;
      case "6Y97ww8IgSJ":
        Script7();
        break;
      case "5wXvLA76p4q":
        Script8();
        break;
      case "5m6n4hkGok9":
        Script9();
        break;
      case "5x15dNWhbsz":
        Script10();
        break;
      case "6kC7CZ1OuC2":
        Script11();
        break;
      case "5ccyYzHm76x":
        Script12();
        break;
      case "6nEY8EGCZgx":
        Script13();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var text = player.GetVar("Notes");
copyFunction (text);

function copyFunction(tt) {
  
  const copyText = tt;
  const textArea = document.createElement('textarea');
  textArea.textContent = copyText;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
    document.body.removeChild(textArea);
}
}

function Script2()
{
  var player = GetPlayer();
var email = ''
var NoteText = player.GetVar('Notes');
var subject = 'Lipo notes';
var emailBody = NoteText;
var mailto_link = 'mailto:' + email + '?subject=' + subject + '&body=' + encodeURIComponent(emailBody);
win = window.open(mailto_link, 'emailWin');
}

function Script3()
{
  //Retrieve Player Variables
var player = GetPlayer();
NoteText = player.GetVar("Notes");

//Create PDF
var doc = new jsPDF('portrait');

//Create Split Text Variables
var splitNotes = doc.splitTextToSize(NoteText, 550);

//other vars
var offsetY = 4;
var lineHeight = 4;

//Heading
doc.setFontStyle("bold");
doc.setFontSize(16);
doc.setTextColor(0, 0, 0);
doc.text(10, 15 + lineHeight * 0 + offsetY, "My lipo notes");

//Note text
doc.setFontStyle("normal");
doc.setFontSize(12);
doc.setTextColor(0, 0, 0);
doc.text(10, 15 + lineHeight * 2 + offsetY, splitNotes);

//Save PDF
doc.save('My Lipo Notes.pdf');
}

function Script4()
{
  ga('send', 'event', 'Button', 'click', 'Credits');
}

function Script5()
{
  ga('send', 'event', 'Button', 'click', 'Download as an app');
}

function Script6()
{
  ga('send', 'event', 'Button', 'click', 'Share this resource');
}

function Script7()
{
  ga('send', 'event', 'Button', 'click', 'Scientific evidence');
}

function Script8()
{
  ga('send', 'event', 'Button', 'click', 'Common causes, side effects and examples');
}

function Script9()
{
  ga('send', 'event', 'Button', 'click', 'What is lipodystrophy?');
}

function Script10()
{
  ga('send', 'event', 'Button', 'click', 'How to avoid lipodystrophy');
}

function Script11()
{
  ga('send', 'event', 'Button', 'click', 'How to self examine');
}

function Script12()
{
  ga('send', 'event', 'Button', 'click', 'What to do if you find lipodystrophy?');
}

function Script13()
{
  ga('send', 'event', 'Button', 'click', 'Notes');
}

