export function parseTeamString(s: string): { gameTitle: string, members: string[], url: string, imageCount: number } {
  const [ title, members, url, imageCount ] = s.split("|");
  return { gameTitle: title.trim(), members: members.split(",").map(s=>s.trim()).filter(s=>s.length>0), url: url.trim(), imageCount: parseInt(imageCount) };
}

export function formatTitleToUrl(title: string){
  return title.trim().toLowerCase().replace(/[^\w\s]/g, '').replace(/\s/g, "_");
}

export function parseEventString(s: string) : { date : Date, location: string, title: string }{
  const [dateStr, titleStr, locationStr] = s.split("|");
  return { date: new Date(dateStr.trim()), location: locationStr.trim(), title: titleStr.trim()};
}

export function parseAwardString(s: string) : {award: string, winner: string} {
  const [ winnerStr, awardStr ] = s.split("|");
  return { award: awardStr.trim(), winner: winnerStr.trim() };
}

export function parseSponsorString(s: string) : {name: string, imageSrc: string, url: string} {
  const [name, src, url] = s.split("|");
  return {name: name.trim(), imageSrc: src.trim(), url: url.trim()};
}

export function getGameImageUrls(title: string, identifier: string, imageCount: number, format = 'png') : string[] {
  if (imageCount === 0) return [];
  const prefix = `/game-jam/images/${identifier}/games/`;
  const urls = [prefix + `${formatTitleToUrl(title)}_${identifier}.${format}`];
  for(let i = 1; i < imageCount; i++){
    urls.push(prefix + `${formatTitleToUrl(title)}_${identifier}_${i}.${format}`);
  }
  return urls;
}