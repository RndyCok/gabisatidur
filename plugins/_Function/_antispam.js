export async function all(m) {
  if (!m.message) return;
  this.spam = this.spam ? this.spam : {};
  if (!m.isCommand) return;

  if (m.sender in this.spam) {
    this.spam[m.sender].count++;
    if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 5) {
      if (this.spam[m.sender].count > 5) {
        global.db.data.users[m.sender].banned = true;
        m.reply(
          "*Spam cmd detect!*\nKamu telah di banned karena spam cmd!\nUntuk kembalikan-nya, silakan hubungi owner kami"
        );
      }
      this.spam[m.sender].count = 0;
      this.spam[m.sender].lastspam = m.messageTimestamp.toNumber();
    }
  } else
    this.spam[m.sender] = {
      jid: m.sender,
      count: 0,
      lastspam: 0,
    };
}
