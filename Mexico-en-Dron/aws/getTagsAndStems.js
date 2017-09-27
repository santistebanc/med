const natural = require('dbrans-natural');

export default (videos) => {
  let tags = [];
  let stems = [];
  videos.forEach(vid => {
    vid.tags && vid.tags.forEach(tag => {
      const stem = natural.PorterStemmerEs.stem(tag);
      const idx = tags.findIndex(t => t.title == tag);
      const sidx = stems.findIndex(t => t.title == tag);
      if (idx == -1) {
        tags.push({ title: tag, videos: vid.key })
      } else {
        tags[idx].videos.push(vid.key)
      }
      if (sidx == -1) {
        stems.push({ title: stem, videos: vid.key })
      } else {
        stems[sidx].videos.push(vid.key)
      }
    })
  })
  return { tags, stems };
}