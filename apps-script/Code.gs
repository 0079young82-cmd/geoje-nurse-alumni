/**
 * 거제대학 간호과 동문회 의견함 - 저장소 (Google 스프레드시트)
 *
 * 1) 아래 ADMIN_PASSWORD 를 회장님만 아는 비밀번호로 바꾸세요.
 * 2) 배포 > 새 배포 > 유형: 웹 앱, 실행: 나, 액세스: 모든 사용자 > 배포
 * 3) 나온 웹 앱 URL(…/exec)을 GitHub 의 config.js 에 붙여넣으세요.
 * 코드를 고친 뒤에는 배포 > 배포 관리 > 수정 > 버전: 새 버전 으로 다시 배포해야 반영됩니다.
 */
const ADMIN_PASSWORD = '여기에-회장님-비밀번호';

const SHEET_RESP = '응답';
const SHEET_CONF = '공개내용';
const HEADERS = ['키','받은시각','이름','기수','학과','회칙 의견','회칙 기타','감사추천1','감사추천2','감사 추천이유','회장추천','회장 추천이유','질문','원본(수정 금지)'];

const DEFAULT_STATE = {
  "org": "거제대학 간호과 동문회",
  "term": "2026년 임원단",
  "deadline": "2026-11-30",
  "notice": "2026년을 끝으로 현 임원단이 다음 임원진에게 동문회를 넘겨드립니다.\n총회 시간을 줄이기 위해 회칙 개정, 감사 2명 추천, 차기 회장 추천, 회계 질문을 이 앱으로 미리 받습니다.\n휴대폰으로 5분이면 끝납니다. 마지막 단계에서 제출 버튼만 누르면 회장에게 바로 전달됩니다.",
  "bylaw": [
    {
      "id": "b1",
      "article": "제8조 임원 구성 (감사 2명 신설)",
      "current": "회장 1명, 부회장 1명, 총무 1명, 서기 1명, 이사 1명을 둔다.",
      "proposed": "회장 1명, 부회장 1명, 총무 1명, 서기 1명, 이사 1명, 감사 2명을 둔다.",
      "reason": "현행 회칙에는 회계를 점검할 감사가 없음. 회계 투명성을 위해 감사 2명을 둠."
    },
    {
      "id": "b2",
      "article": "제12조의2 감사의 직무 (신설)",
      "current": "",
      "proposed": "감사는 연 1회 이상 본 회의 회계와 업무 집행을 감사하고 그 결과를 정기총회에 보고한다. 감사는 다른 임원을 겸할 수 없다.",
      "reason": "감사의 역할과 보고 시기를 명확히 함."
    },
    {
      "id": "b3",
      "article": "제27조 결산보고 (감사 의견 추가)",
      "current": "결산보고는 정기총회시 회장이 보고한다.",
      "proposed": "결산보고는 정기총회 시 회장이 보고하며, 감사의 감사 의견을 함께 보고한다.",
      "reason": "결산 내용을 감사가 확인한 뒤 회원에게 보고하도록 함."
    },
    {
      "id": "b4",
      "article": "제7조 회원의 의무 (중복 조문 정비)",
      "current": "본회의 회원은 본 회에서 추진하는 모든 행사에 참여 및 경조 혜택을 받을 권한을 갖는다.",
      "proposed": "본 회의 회원은 회칙을 준수하고 회비를 납부할 의무를 진다.",
      "reason": "현행 제7조가 제6조와 같은 문장으로 중복되어 있어 회원의 의무 조항으로 바꿈."
    },
    {
      "id": "b5",
      "article": "자구 수정 (뜻은 그대로)",
      "current": "제1조 \"본회은\" / 제4조 \"자격을 갖은 자\" / 제15조 \"인원은 회원들의 추천을 받아\"",
      "proposed": "제1조 \"본회는\" / 제4조 \"자격을 갖춘 자\" / 제15조 \"임원은 회원들의 추천을 받아\"",
      "reason": "오타와 맞춤법 정리. 내용 변경 없음."
    }
  ],
  "bylawText": "개정일 17년 4월 12일\n거제 대학 간호사 동문회\n\n제1장 총칙\n제 1조 본회은 “거제대학 간호과 동문회”라 한다.\n제 2조 본 회의 목적은 회원들 상호간의 친목, 화합, 단결을 도모하고 더 나아가 모교인 거제대학과 지역사회의 발전에 기여함에 있다,\n\n제2장 회원\n제 3조 본회의 회원은 대우병원 직원으로서 거제대학 졸업생이어야 한다.\n제 4조 회원의 자격을 갖은 자는 제3조에 결격사유가 없는 자로서 회에서 정한 회비를 납부하면 정회원의 자격이 부여되고 회원의 탈퇴는 퇴사 시로 한다.\n제 5조 본 회의 회원은 선거권과 피선거권을 가진다.\n제 6조 본 회의 회원은 본 회에서 추진하는 모든 행사에 참여 및 경조 혜택을 받을 권한을 갖는다.\n제 7조 본회의 회원은 본 회에서 추진하는 모든 행사에 참여 및 경조 혜택을 받을 권한을 갖는다.\n\n제3장 임원\n제 8조 회장 1명, 부회장 1명, 총무 1명, 서기 1명, 이사 1명을 둔다.\n제 9조 회장은 본 회를 대표하고 회의를 소집, 총괄하여 그 의장이 된다.\n제10조 부회장은 회장 결격사유 시 그 업무를 대행한다.\n제11조 총무는 본 회의 모든 회계를 담당한다.\n제12조 총무는 대․내외적으로 각 회원들 간 의사 전달의 역할을 담당한다.\n\n제4장 임원 임기\n제13조 취임일로부터 만 2년으로 한다. \n제14조 임원의 선출은 임기 만료 시 정기총회에서 선출한다.\n제15조 인원은 회원들의 추천을 받아 투표함으로서 최다 득표자가 선출된다.\n\n제5장 총회\n제16조 총회는 정기총회, 임시총회로 구성한다.\n제17조 정기총회는 1년 1회(4월)로 한다.\n제18조 임시총회는 임원진의 의결 후 회원들에게 통보함으로서 개최한다.\n제19조 정기모임은 분기별로 시행하며 임원진이 정한 날짜에 한다.\n제20조 모든 회의의 의결은 출석인원 과반수 이상의 찬성으로 의결한다.\n제21조 회의는 전 회원의 참석을 원칙으로 하며 부득이한 경우 불참사유가 있는 경우는 구두, 서면으로 회장에게 통보한다.\n제22조 모든 회의는 일주일전에 전 회원에게 통보하는 것을 원칙으로 한다.\n\n제6장 재정\n제23조 회원은 월 오천원의 회비를 납부하여야 한다. 단 무급휴직기간, 신규직원 시용기간 동안은 회비를 납부하지 않고 회원자격을 유지한다. \n\n제24조 정회원의 탈퇴 후 재 가입 시 입회비를 납부함으로서 정회원이 된다.\n제25조 본 회에서 본인의 임의탈퇴 시 거출된 회비는 일체 반환하지 않는다.\n제26조 예산 및 결산을 회장과 부회장, 총무가 편성하고 편성 된 예산은 총무가 보고한다.\n제27조 결산보고는 정기총회시 회장이 보고한다.\n제28조 재정은 회원 상호간의 친목활동, 모교발전을 위한 장학금 지급 및 기타 대외활동에 편성한다.\n <별첨1>\n\n제7장 경조사\n제29조 경조금 지급은 아래와 같다.\n -결혼(단 1년 만근 이상 ):10만원\n -본인사망\n : 조의금 20만원 + 조화 10만원\n -부모상(기혼자는 시부모 포함), 배우자상 \n : 조의금 10만원 + 조화 10만원 \n -퇴사(단 5년 만근 이상): 5만원\n\n제8장 부칙\n제30조 본 회칙에 명시되지 않은 사항은 임원들의 결정과 관례에 의한다. \n\n제31조 본 회의 회칙은 총회의 인준을 받은 날로부터 적용된다.\n제32조 본 회의 회칙을 수정하고자 할 때에는 임원의 의견을 거쳐 총회의 승인을 얻어야 한다.\n\n# 별 첨 #  \n  1. 친목활동 : 정기․임시 모임관련 비용 지출\n 명절선물 지급 (년 1회)\n 모교발전지원 : 장학금 지급 : 반기별 지급\n 간호사 국가고시 응원\n 기타 대외활동 : 대상과 금액 조정은 임원진에게 위임하되 금액의 상한선은 연 200,000원으로 한다,\n 정기총회 회식 : 근무자는 문화상품권 만원 지급(3교대, over근무자만 해당)\n 불참석자 범칙금 없음",
  "ledger": [],
  "qa": []
};

function doGet(e) {
  const action = (e && e.parameter && e.parameter.action) || 'public';
  if (action === 'public') return out({ ok: true, state: getState() });
  return out({ ok: false, error: 'unknown' });
}

function doPost(e) {
  let req;
  try { req = JSON.parse(e.postData.contents); } catch (err) { return out({ ok: false, error: 'bad_request' }); }
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    switch (req.action) {
      case 'submit': return out(submit(req.data));
      case 'admin_login': return out(checkPw(req.pw) ? { ok: true } : { ok: false, error: 'wrong_password' });
      case 'admin_results':
        if (!checkPw(req.pw)) return out({ ok: false, error: 'wrong_password' });
        return out({ ok: true, responses: allResponses(), state: getState() });
      case 'admin_save_state':
        if (!checkPw(req.pw)) return out({ ok: false, error: 'wrong_password' });
        saveState(req.state); return out({ ok: true, state: getState() });
      case 'admin_delete':
        if (!checkPw(req.pw)) return out({ ok: false, error: 'wrong_password' });
        return out(deleteResponse(req.key));
      default: return out({ ok: false, error: 'unknown' });
    }
  } finally { lock.releaseLock(); }
}

function out(obj) { return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON); }
function checkPw(pw) { return typeof pw === 'string' && pw.length > 0 && pw === ADMIN_PASSWORD; }
function ss() { return SpreadsheetApp.getActiveSpreadsheet(); }
function sheet(name, headers) {
  let sh = ss().getSheetByName(name);
  if (!sh) { sh = ss().insertSheet(name); if (headers) { sh.appendRow(headers); sh.setFrozenRows(1); } }
  return sh;
}

function getState() {
  const sh = sheet(SHEET_CONF);
  const v = sh.getRange('A1').getValue();
  if (!v) return DEFAULT_STATE;
  try { return JSON.parse(v); } catch (err) { return DEFAULT_STATE; }
}
function saveState(state) {
  if (!state || typeof state !== 'object') throw new Error('bad state');
  const sh = sheet(SHEET_CONF);
  state.updated = new Date().toISOString();
  sh.getRange('A1').setValue(JSON.stringify(state));
  sh.getRange('A2').setValue('↑ 앱의 공개 내용입니다. 여기서 직접 고치지 말고 앱의 관리자 화면에서 고쳐주세요.');
  // 회계 내역을 보기 좋게 별도 시트에도 정리
  const lg = sheet('회계내역');
  lg.clearContents();
  lg.appendRow(['날짜','구분','내용','항목','금액','비고']);
  (state.ledger || []).slice().sort((a,b)=>String(a.date).localeCompare(String(b.date))).forEach(r =>
    lg.appendRow([r.date, r.type === 'in' ? '수입' : '지출', r.item, r.cat, Number(r.amount) || 0, r.note || '']));
}

function clean(s, max) { return String(s == null ? '' : s).slice(0, max || 2000); }
function keyOf(n, c) { return (String(n).replace(/\s+/g,'') + '|' + String(c).replace(/\s+/g,'')).toLowerCase(); }

function submit(d) {
  if (!d || !clean(d.n).trim() || !clean(d.c).trim()) return { ok: false, error: 'need_name' };
  if (!/^\d{4}$/.test(String(d.pin || ''))) return { ok: false, error: 'need_pin' };
  const data = {
    t: Date.now(), n: clean(d.n, 40).trim(), c: clean(d.c, 20).trim(), d: clean(d.d, 40).trim(),
    b: {}, bf: clean(d.bf), a: [clean(d.a && d.a[0], 40), clean(d.a && d.a[1], 40)], ar: clean(d.ar),
    p: clean(d.p, 40), pr: clean(d.pr), q: clean(d.q), pin: String(d.pin)
  };
  const state = getState();
  (state.bylaw || []).forEach(x => {
    const v = (d.b || {})[x.id] || ['', ''];
    data.b[x.id] = [['yes','no','hold'].indexOf(v[0]) >= 0 ? v[0] : '', clean(v[1])];
  });
  const key = keyOf(data.n, data.c);
  const sh = sheet(SHEET_RESP, HEADERS);
  const rows = sh.getDataRange().getValues();
  let rowIdx = -1;
  for (let i = 1; i < rows.length; i++) if (rows[i][0] === key) { rowIdx = i + 1; break; }
  if (rowIdx > 0) {
    let prev = {}; try { prev = JSON.parse(rows[rowIdx - 1][13]); } catch (err) {}
    if (prev.pin && prev.pin !== data.pin) return { ok: false, error: 'pin_mismatch' };
  }
  const VOTE = { yes: '찬성', no: '반대', hold: '보류', '': '미선택' };
  const bylawText = (state.bylaw || []).map((x, i) => `${i+1}.${x.article}: ${VOTE[data.b[x.id][0]]}${data.b[x.id][1] ? ' - ' + data.b[x.id][1] : ''}`).join('\n');
  const row = [key, new Date(data.t), data.n, data.c, data.d, bylawText, data.bf, data.a[0], data.a[1], data.ar, data.p, data.pr, data.q, JSON.stringify(data)];
  if (rowIdx > 0) sh.getRange(rowIdx, 1, 1, row.length).setValues([row]); else sh.appendRow(row);
  return { ok: true, updated: rowIdx > 0 };
}

function allResponses() {
  const sh = sheet(SHEET_RESP, HEADERS);
  const rows = sh.getDataRange().getValues();
  const list = [];
  for (let i = 1; i < rows.length; i++) {
    try { const d = JSON.parse(rows[i][13]); delete d.pin; d.key = rows[i][0]; list.push(d); } catch (err) {}
  }
  return list;
}
function deleteResponse(key) {
  const sh = sheet(SHEET_RESP, HEADERS);
  const rows = sh.getDataRange().getValues();
  for (let i = rows.length - 1; i >= 1; i--) if (rows[i][0] === key) { sh.deleteRow(i + 1); return { ok: true }; }
  return { ok: false, error: 'not_found' };
}
