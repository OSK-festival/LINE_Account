const ACCESS_TOKEN = PropertiesService.getScriptProperties().getProperty("ACCESS_TOKEN");

/**
 * Postされたとき
 * @param {JSON} e Postされたデータ
 */
function onPost(e) {

  // 記録

  // 変数に代入
  const events = e.events;

  // for文の中で events: [] の中身をひとつづつ確認
  for (i = 0; i < events.length; i++) {
    const main = new Main(events[i]);
    main.execute();
  }
}