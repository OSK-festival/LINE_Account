/**
 * LINEのクラス
 *
 * 返信，ユーザー情報の取得
 */
class LINE {
  /**
   * 返信
   * @param {JSON} messageObject メッセージの内容
   * @param {string} replyToken リプライトークン
   */
  static reply(messageObject, replyToken) {

    const url = "https://api.line.me/v2/bot/message/reply";
    const headers = {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + ACCESS_TOKEN,
    };

    const payload = {
      'messages': messageObject,
      'replyToken': replyToken,
    }

    const query = {
      'headers': headers,
      'method': 'post',
      'payload': JSON.stringify(payload),
    };

    UrlFetchApp.fetch(url, query);
    return "返信しました"
  }

  /**
   * ユーザーのプロフィールを取得
   * @param {string} userId ユーザーID
   * @returns {Profile} プロフィール
   */
  static getProfile(userId) {

    const data = {
      "displayName": "LINE taro",
      "userId": "U4af4980629...",
      "language": "en",
      "pictureUrl": "https://obs.line-apps.com/...",
      "statusMessage": "Hello, LINE!"
    }

    const url = `https://api.line.me/v2/bot/profile/${userId}`;
    const headers = {
      'Authorization': 'Bearer ' + ACCESS_TOKEN,
    };

    const query = {
      'headers': headers,
      'method': 'get',
    };

    const result = UrlFetchApp.fetch(url, query);
    return result;
  }
}
