/* 거제대학 간호과 동문회 인계 의견함 */
(function(){
'use strict';
const API = (window.GJ_API || '').trim();
const DEFAULT_STATE = {"org": "거제대학 간호과 동문회", "term": "2026년 임원단", "deadline": "2026-11-30", "notice": "2026년을 끝으로 현 임원단이 다음 임원진에게 동문회를 넘겨드립니다.\n총회 시간을 줄이기 위해 회칙 개정, 감사 2명 추천, 차기 회장 추천, 회계 질문을 이 앱으로 미리 받습니다.\n휴대폰으로 5분이면 끝납니다. 마지막 단계에서 제출 버튼만 누르면 회장에게 바로 전달됩니다.", "bylaw": [{"id": "b1", "article": "제8조 임원 구성 (감사 2명 신설)", "current": "회장 1명, 부회장 1명, 총무 1명, 서기 1명, 이사 1명을 둔다.", "proposed": "회장 1명, 부회장 1명, 총무 1명, 서기 1명, 이사 1명, 감사 2명을 둔다.", "reason": "현행 회칙에는 회계를 점검할 감사가 없음. 회계 투명성을 위해 감사 2명을 둠."}, {"id": "b2", "article": "제12조의2 감사의 직무 (신설)", "current": "", "proposed": "감사는 연 1회 이상 본 회의 회계와 업무 집행을 감사하고 그 결과를 정기총회에 보고한다. 감사는 다른 임원을 겸할 수 없다.", "reason": "감사의 역할과 보고 시기를 명확히 함."}, {"id": "b3", "article": "제27조 결산보고 (감사 의견 추가)", "current": "결산보고는 정기총회시 회장이 보고한다.", "proposed": "결산보고는 정기총회 시 회장이 보고하며, 감사의 감사 의견을 함께 보고한다.", "reason": "결산 내용을 감사가 확인한 뒤 회원에게 보고하도록 함."}, {"id": "b4", "article": "제7조 회원의 의무 (중복 조문 정비)", "current": "본회의 회원은 본 회에서 추진하는 모든 행사에 참여 및 경조 혜택을 받을 권한을 갖는다.", "proposed": "본 회의 회원은 회칙을 준수하고 회비를 납부할 의무를 진다.", "reason": "현행 제7조가 제6조와 같은 문장으로 중복되어 있어 회원의 의무 조항으로 바꿈."}, {"id": "b5", "article": "자구 수정 (뜻은 그대로)", "current": "제1조 \"본회은\" / 제4조 \"자격을 갖은 자\" / 제15조 \"인원은 회원들의 추천을 받아\"", "proposed": "제1조 \"본회는\" / 제4조 \"자격을 갖춘 자\" / 제15조 \"임원은 회원들의 추천을 받아\"", "reason": "오타와 맞춤법 정리. 내용 변경 없음."}], "bylawText": "개정일 17년 4월 12일\n거제 대학 간호사 동문회\n\n제1장 총칙\n제 1조 본회은 “거제대학 간호과 동문회”라 한다.\n제 2조 본 회의 목적은 회원들 상호간의 친목, 화합, 단결을 도모하고 더 나아가 모교인 거제대학과 지역사회의 발전에 기여함에 있다,\n\n제2장 회원\n제 3조 본회의 회원은 대우병원 직원으로서 거제대학 졸업생이어야 한다.\n제 4조 회원의 자격을 갖은 자는 제3조에 결격사유가 없는 자로서 회에서 정한 회비를 납부하면 정회원의 자격이 부여되고 회원의 탈퇴는 퇴사 시로 한다.\n제 5조 본 회의 회원은 선거권과 피선거권을 가진다.\n제 6조 본 회의 회원은 본 회에서 추진하는 모든 행사에 참여 및 경조 혜택을 받을 권한을 갖는다.\n제 7조 본회의 회원은 본 회에서 추진하는 모든 행사에 참여 및 경조 혜택을 받을 권한을 갖는다.\n\n제3장 임원\n제 8조 회장 1명, 부회장 1명, 총무 1명, 서기 1명, 이사 1명을 둔다.\n제 9조 회장은 본 회를 대표하고 회의를 소집, 총괄하여 그 의장이 된다.\n제10조 부회장은 회장 결격사유 시 그 업무를 대행한다.\n제11조 총무는 본 회의 모든 회계를 담당한다.\n제12조 총무는 대․내외적으로 각 회원들 간 의사 전달의 역할을 담당한다.\n\n제4장 임원 임기\n제13조 취임일로부터 만 2년으로 한다. \n제14조 임원의 선출은 임기 만료 시 정기총회에서 선출한다.\n제15조 인원은 회원들의 추천을 받아 투표함으로서 최다 득표자가 선출된다.\n\n제5장 총회\n제16조 총회는 정기총회, 임시총회로 구성한다.\n제17조 정기총회는 1년 1회(4월)로 한다.\n제18조 임시총회는 임원진의 의결 후 회원들에게 통보함으로서 개최한다.\n제19조 정기모임은 분기별로 시행하며 임원진이 정한 날짜에 한다.\n제20조 모든 회의의 의결은 출석인원 과반수 이상의 찬성으로 의결한다.\n제21조 회의는 전 회원의 참석을 원칙으로 하며 부득이한 경우 불참사유가 있는 경우는 구두, 서면으로 회장에게 통보한다.\n제22조 모든 회의는 일주일전에 전 회원에게 통보하는 것을 원칙으로 한다.\n\n제6장 재정\n제23조 회원은 월 오천원의 회비를 납부하여야 한다. 단 무급휴직기간, 신규직원 시용기간 동안은 회비를 납부하지 않고 회원자격을 유지한다. \n\n제24조 정회원의 탈퇴 후 재 가입 시 입회비를 납부함으로서 정회원이 된다.\n제25조 본 회에서 본인의 임의탈퇴 시 거출된 회비는 일체 반환하지 않는다.\n제26조 예산 및 결산을 회장과 부회장, 총무가 편성하고 편성 된 예산은 총무가 보고한다.\n제27조 결산보고는 정기총회시 회장이 보고한다.\n제28조 재정은 회원 상호간의 친목활동, 모교발전을 위한 장학금 지급 및 기타 대외활동에 편성한다.\n <별첨1>\n\n제7장 경조사\n제29조 경조금 지급은 아래와 같다.\n -결혼(단 1년 만근 이상 ):10만원\n -본인사망\n : 조의금 20만원 + 조화 10만원\n -부모상(기혼자는 시부모 포함), 배우자상 \n : 조의금 10만원 + 조화 10만원 \n -퇴사(단 5년 만근 이상): 5만원\n\n제8장 부칙\n제30조 본 회칙에 명시되지 않은 사항은 임원들의 결정과 관례에 의한다. \n\n제31조 본 회의 회칙은 총회의 인준을 받은 날로부터 적용된다.\n제32조 본 회의 회칙을 수정하고자 할 때에는 임원의 의견을 거쳐 총회의 승인을 얻어야 한다.\n\n# 별 첨 #  \n  1. 친목활동 : 정기․임시 모임관련 비용 지출\n 명절선물 지급 (년 1회)\n 모교발전지원 : 장학금 지급 : 반기별 지급\n 간호사 국가고시 응원\n 기타 대외활동 : 대상과 금액 조정은 임원진에게 위임하되 금액의 상한선은 연 200,000원으로 한다,\n 정기총회 회식 : 근무자는 문화상품권 만원 지급(3교대, over근무자만 해당)\n 불참석자 범칙금 없음", "ledger": [], "qa": []};
let S = DEFAULT_STATE;        // 공개 내용 (서버에서 받아옴)
let P = null;                 // 관리자가 고치는 사본
let dirty = 0;
let PW = '';                  // 관리자 비밀번호 (이 탭에서만 기억)
let responses = [];
let loaded = false;

const $ = (s, r=document) => r.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const won = n => (Number(n)||0).toLocaleString('ko-KR') + '원';
const uid = () => Math.random().toString(36).slice(2, 9);
const fmtDate = s => { if(!s) return ''; const d = new Date(String(s).length===10 ? s+'T00:00:00+09:00' : s); return isNaN(d) ? s : `${d.getMonth()+1}월 ${d.getDate()}일`; };
const fmtTime = t => new Date(t).toLocaleString('ko-KR', {timeZone:'Asia/Seoul', month:'numeric', day:'numeric', hour:'2-digit', minute:'2-digit'});
const normName = s => String(s||'').replace(/\(.*?\)/g,'').replace(/\s+/g,'').trim();
const store = {
  get(k){ try{ return JSON.parse(localStorage.getItem(k)); }catch(e){ return null; } },
  set(k,v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} }
};
const VOTE = {yes:'찬성', no:'반대', hold:'보류', '':'미선택'};
const ERR = {
  need_name:'이름과 기수를 적어주세요.', need_pin:'수정용 비밀번호 숫자 4자리를 적어주세요.',
  pin_mismatch:'같은 이름·기수로 이미 제출된 의견이 있습니다. 처음 제출할 때 정한 비밀번호 4자리를 입력해야 고칠 수 있습니다.',
  wrong_password:'관리자 비밀번호가 맞지 않습니다.', network:'인터넷 연결을 확인한 뒤 다시 눌러주세요.', no_api:'아직 저장소가 연결되지 않은 미리보기입니다. 회장에게 알려주세요.'
};

/* ---------- 서버 통신 ---------- */
async function apiGet(){
  if(!API) throw {code:'no_api'};
  const r = await fetch(API + '?action=public', {cache:'no-store'});
  return r.json();
}
async function apiPost(body){
  if(!API) throw {code:'no_api'};
  let r;
  try { r = await fetch(API, {method:'POST', headers:{'Content-Type':'text/plain;charset=utf-8'}, body:JSON.stringify(body)}); }
  catch(e){ throw {code:'network'}; }
  const j = await r.json().catch(() => ({ok:false, error:'network'}));
  if(!j.ok) throw {code:j.error || 'network'};
  return j;
}

/* ---------- 화면 ---------- */
const VIEWS = [['intro','안내'], ['bylaw','회칙 개정'], ['elect','임원 추천'], ['money','회계 공개'], ['send','제출하기']];
function currentView(){ const h = location.hash.slice(1); if(h==='admin') return 'admin'; return VIEWS.some(v=>v[0]===h) ? h : 'intro'; }
function renderTabs(){
  const cur = currentView();
  let html = VIEWS.map(([id,name]) => `<a href="#${id}" ${cur===id?'aria-current="page"':''}>${name}</a>`).join('');
  if(PW || cur==='admin') html += `<a class="admin" href="#admin" ${cur==='admin'?'aria-current="page"':''}>취합 결과</a>`;
  $('#tabs').innerHTML = html;
}
function show(){
  if(!loaded) return;
  renderTabs();
  const cur = currentView();
  document.querySelectorAll('#view > section').forEach(s => s.hidden = s.dataset.view !== cur);
  if(cur==='send') renderSummary();
  if(cur==='admin') renderAdmin();
  const t = $('#tabs a[aria-current]'); if(t) t.scrollIntoView({block:'nearest', inline:'center'});
}
const nextBtn = (to, label) => `<button type="button" class="primary next" data-go="${to}">${label}</button>`;

function buildMember(){
  $('#h-eyebrow').textContent = `${S.term} 인계 · 사전 의견 수렴`;
  $('#h-deadline').textContent = S.deadline ? fmtDate(S.deadline) + '까지' : '총회 전까지';
  const closed = isClosed();
  const intro = `<section data-view="intro">
    ${!API ? `<p class="err card">미리보기 모드입니다. config.js 에 저장소 주소를 넣어야 제출이 됩니다.</p>` : ''}
    <h2>동문 여러분께</h2>
    <div class="card"><p style="white-space:pre-wrap">${esc(S.notice)}</p></div>
    <div class="card"><h3>이렇게 진행됩니다</h3>
      <ol class="steps">
        <li><b>회칙 개정</b> 개정안마다 찬성·반대·보류와 의견</li>
        <li><b>임원 추천</b> 감사 2명, 차기 회장 1명 추천</li>
        <li><b>회계 공개</b> ${esc(S.term)} 수입·지출 내역 확인, 궁금한 점 질문</li>
        <li><b>제출하기</b> 이름·기수를 적고 제출 버튼을 누르면 끝</li>
      </ol>
      <p class="note">작성 중인 내용은 이 휴대폰에 자동 저장됩니다. 중간에 닫아도 이어서 쓸 수 있습니다.</p>
    </div>
    ${nextBtn('bylaw','시작하기')}
    <p class="note" style="text-align:center;margin-top:24px"><a href="#admin" style="color:var(--muted)">회장 전용</a></p>
  </section>`;

  const items = S.bylaw.length ? S.bylaw.map((b,i) => `<div class="card">
      <div><span class="tag">개정안 ${i+1}</span> <h3 style="display:inline;margin-left:6px">${esc(b.article)}</h3></div>
      ${b.current ? `<div><div class="lbl">현행</div><p class="quote">${esc(b.current)}</p></div>` : ''}
      <div><div class="lbl">개정안</div><p class="quote new">${esc(b.proposed)}</p></div>
      ${b.reason ? `<div><div class="lbl">개정 사유</div><p class="note">${esc(b.reason)}</p></div>` : ''}
      <div class="vote" role="radiogroup" aria-label="${esc(b.article)} 의견">
        ${[['yes','찬성'],['no','반대'],['hold','보류']].map(([v,l]) => `<input type="radio" name="v-${b.id}" id="v-${b.id}-${v}" value="${v}"><label for="v-${b.id}-${v}">${l}</label>`).join('')}
      </div>
      <label class="f">의견 <small>(선택) 반대·보류라면 이유나 수정안을 적어주세요</small><textarea id="c-${b.id}" rows="2"></textarea></label>
    </div>`).join('') : `<p class="empty">회칙 개정안이 아직 올라오지 않았습니다. 아래에 자유롭게 의견을 남겨주세요.</p>`;
  const bylaw = `<section data-view="bylaw" hidden>
    <h2>회칙 개정안</h2>
    <p class="lead">총회에서 의결할 개정안입니다. 항목마다 의견을 골라주세요.</p>
    ${S.bylawText ? `<details class="card"><summary>현행 회칙 전문 보기</summary><p class="quote" style="margin-top:10px;font-size:15px">${esc(S.bylawText)}</p></details>` : ''}
    ${items}
    <div class="card"><label class="f">그 밖에 고쳤으면 하는 회칙 <small>(선택) 조항과 바꿀 내용을 적어주세요</small><textarea id="b-free"></textarea></label></div>
    ${nextBtn('elect','다음: 임원 추천')}
  </section>`;

  const elect = `<section data-view="elect" hidden>
    <h2>차기 임원 추천</h2>
    <p class="lead">추천하실 동문의 이름과 기수(또는 졸업연도)를 함께 적어주세요. 추천 내용은 회장만 볼 수 있습니다.</p>
    <div class="card"><h3>감사 2명</h3>
      <div class="row2">
        <label class="f">감사 추천 ① <input type="text" id="aud1" placeholder="예: 김OO (15기)"></label>
        <label class="f">감사 추천 ② <input type="text" id="aud2" placeholder="예: 이OO (18기)"></label>
      </div>
      <label class="f">추천 이유 <small>(선택)</small><textarea id="aud-reason" rows="2"></textarea></label>
    </div>
    <div class="card"><h3>차기 회장</h3>
      <label class="f">회장 추천 <input type="text" id="pres" placeholder="예: 박OO (12기)"></label>
      <label class="f">추천 이유 <small>(선택)</small><textarea id="pres-reason" rows="2"></textarea></label>
    </div>
    ${nextBtn('money','다음: 회계 공개')}
  </section>`;

  const money = `<section data-view="money" hidden>
    <h2>${esc(S.term)} 회계 공개</h2>
    ${ledgerHTML(S.ledger)}
    ${qaHTML(S.qa)}
    <div class="card"><label class="f">회계·운영에 대해 궁금한 점 <small>(선택) 회장이 확인 후 답변과 함께 이 화면에 공개합니다. 이름은 공개되지 않습니다.</small><textarea id="q-text"></textarea></label></div>
    ${nextBtn('send','다음: 제출하기')}
  </section>`;

  const send = `<section data-view="send" hidden>
    <h2>제출하기</h2>
    ${closed ? `<p class="card err">의견 마감일(${esc(fmtDate(S.deadline))})이 지났습니다. 그래도 제출하면 회장에게 전달은 됩니다.</p>` : ''}
    <div class="card"><h3>보내는 분</h3>
      <div class="row2">
        <label class="f">이름 <input type="text" id="m-name" autocomplete="name"></label>
        <label class="f">기수 또는 졸업연도 <input type="text" id="m-cohort" placeholder="예: 12기"></label>
      </div>
      <div class="row2">
        <label class="f">학과 <small>(선택)</small><input type="text" id="m-dept" value="간호과"></label>
        <label class="f">수정용 비밀번호 <small>숫자 4자리. 나중에 고칠 때 필요합니다</small><input type="password" id="m-pin" inputmode="numeric" maxlength="4" pattern="\\d{4}" autocomplete="off"></label>
      </div>
      <p class="note">같은 이름·기수로 다시 제출하면 앞의 의견이 새 의견으로 바뀝니다.</p>
    </div>
    <div class="card"><h3>작성한 내용</h3><div id="summary"></div></div>
    <button type="button" class="warm" id="btn-submit">제출하기</button>
    <p id="submit-msg" class="note" aria-live="polite"></p>
  </section>`;

  const admin = `<section data-view="admin" hidden><div id="admin"></div></section>`;
  $('#view').innerHTML = intro + bylaw + elect + money + send + admin;

  const draft = store.get('gj-draft') || {};
  for(const [k,v] of Object.entries(draft)){
    const el = document.getElementById(k); if(!el || k==='m-pin') continue;
    if(el.type==='radio') el.checked = !!v; else el.value = v;
  }
}
function isClosed(){ if(!S.deadline) return false; return Date.now() > new Date(S.deadline + 'T23:59:59+09:00').getTime(); }

function ledgerHTML(L){
  if(!L || !L.length) return `<div class="card"><p class="empty">2026년 회계는 11월 13일 나이팅게일 선서식 화환 지출까지 마친 뒤 최종 정리해 이곳에 공개합니다. 지금 의견을 먼저 제출하시고, 회계가 올라온 뒤 같은 이름·비밀번호로 질문을 추가해 다시 제출하셔도 됩니다.</p></div>`;
  const inc = L.filter(r=>r.type==='in').reduce((a,r)=>a+(+r.amount||0),0);
  const exp = L.filter(r=>r.type==='out').reduce((a,r)=>a+(+r.amount||0),0);
  const cats = {}; L.filter(r=>r.type==='out').forEach(r => { const c=r.cat||'기타'; cats[c]=(cats[c]||0)+(+r.amount||0); });
  const catRows = Object.entries(cats).sort((a,b)=>b[1]-a[1]);
  const max = catRows.length ? catRows[0][1] : 1;
  const rows = [...L].sort((a,b)=>String(a.date||'').localeCompare(String(b.date||''))).map(r => `<tr><td style="white-space:nowrap">${esc(fmtDate(r.date))}</td><td>${esc(r.item)}${r.note?`<div class="note">${esc(r.note)}</div>`:''}</td><td>${esc(r.cat||'')}</td><td class="amt ${r.type}">${r.type==='in'?'+':'−'}${(+r.amount||0).toLocaleString('ko-KR')}</td></tr>`).join('');
  return `<div class="tiles">
      <div class="tile"><div class="lbl">수입 합계</div><div class="n in">${won(inc)}</div></div>
      <div class="tile"><div class="lbl">지출 합계</div><div class="n out">${won(exp)}</div></div>
      <div class="tile bal"><div class="lbl">잔액</div><div class="n">${won(inc-exp)}</div></div>
    </div>
    ${catRows.length ? `<div class="card"><h3>지출 항목별</h3><div class="rank">${catRows.map(([c,v]) => `<div><span>${esc(c)}</span><b>${won(v)}</b><span class="meter"><i style="width:${(v/max*100).toFixed(1)}%"></i></span></div>`).join('')}</div>${cats['대외활동'] ? `<p class="note">대외활동 지출 ${won(cats['대외활동'])} · 회칙 별첨 연 상한 200,000원${cats['대외활동']>200000?' <span class="err">(상한 초과, 기간 합계 기준)</span>':''}</p>` : ''}</div>` : ''}
    <div class="card"><h3>전체 내역 <span class="note">(${L.length}건)</span></h3><div class="tbl"><table><thead><tr><th>날짜</th><th>내용</th><th>항목</th><th class="amt">금액(원)</th></tr></thead><tbody>${rows}</tbody></table></div></div>`;
}
function qaHTML(Q){
  if(!Q || !Q.length) return '';
  return `<div class="card"><h3>질문과 답변</h3><div class="list">${Q.map(x => `<div class="item"><div class="lbl">${esc(x.who||'동문')} 질문</div><p style="white-space:pre-wrap">${esc(x.q)}</p><p class="quote new">${esc(x.a)}</p></div>`).join('')}</div></div>`;
}

/* ---------- 회원 제출 ---------- */
function collect(){
  const v = id => (document.getElementById(id)?.value || '').trim();
  const b = {};
  S.bylaw.forEach(x => { const r = document.querySelector(`input[name="v-${x.id}"]:checked`); b[x.id] = [r ? r.value : '', v('c-'+x.id)]; });
  return { n:v('m-name'), c:v('m-cohort'), d:v('m-dept'), pin:v('m-pin'), b, bf:v('b-free'), a:[v('aud1'), v('aud2')], ar:v('aud-reason'), p:v('pres'), pr:v('pres-reason'), q:v('q-text') };
}
function renderSummary(){
  const d = collect(); const lines = [];
  S.bylaw.forEach((x,i) => lines.push(`<div class="item"><div class="lbl">개정안 ${i+1} · ${esc(x.article)}</div><p>${VOTE[d.b[x.id][0]]}${d.b[x.id][1]?` · ${esc(d.b[x.id][1])}`:''}</p></div>`));
  lines.push(`<div class="item"><div class="lbl">감사 추천</div><p>${esc(d.a.filter(Boolean).join(', ') || '미입력')}</p></div>`);
  lines.push(`<div class="item"><div class="lbl">차기 회장 추천</div><p>${esc(d.p || '미입력')}</p></div>`);
  if(d.q) lines.push(`<div class="item"><div class="lbl">질문</div><p style="white-space:pre-wrap">${esc(d.q)}</p></div>`);
  $('#summary').innerHTML = `<div class="list">${lines.join('')}</div>`;
}
async function doSubmit(btn){
  const d = collect(), msg = $('#submit-msg');
  const bad = id => { const f = $(id); f.focus(); f.setAttribute('aria-invalid','true'); };
  if(!d.n){ bad('#m-name'); msg.textContent = ERR.need_name; msg.className='err'; return; }
  if(!d.c){ bad('#m-cohort'); msg.textContent = ERR.need_name; msg.className='err'; return; }
  if(!/^\d{4}$/.test(d.pin)){ bad('#m-pin'); msg.textContent = ERR.need_pin; msg.className='err'; return; }
  btn.disabled = true; msg.textContent = '제출하는 중…'; msg.className='note';
  try{
    const r = await apiPost({action:'submit', data:d});
    msg.textContent = r.updated ? '의견을 고쳐서 다시 제출했습니다. 감사합니다.' : '제출했습니다. 회장에게 바로 전달됐습니다. 감사합니다.';
    msg.className = 'ok';
    btn.textContent = '고친 내용으로 다시 제출';
  }catch(e){ msg.textContent = ERR[e.code] || ERR.network; msg.className='err'; }
  btn.disabled = false;
}

/* ---------- 관리자 ---------- */
function tally(list){
  const m = {};
  list.forEach(raw => { const k = normName(raw); if(!k) return; (m[k] ||= {name:String(raw).trim(), n:0}).n++; });
  return Object.values(m).sort((a,b)=>b.n-a.n);
}
function rankHTML(arr, topN){
  if(!arr.length) return `<p class="empty">아직 추천이 없습니다.</p>`;
  const max = arr[0].n;
  return `<div class="rank">${arr.map((x,i) => `<div class="${i<topN?'top':''}"><span>${esc(x.name)}</span><b>${x.n}표</b><span class="meter"><i style="width:${(x.n/max*100).toFixed(1)}%"></i></span></div>`).join('')}</div>`;
}
const answered = key => (P||S).qa.some(x => x.src===key);

async function adminLoad(){
  const j = await apiPost({action:'admin_results', pw:PW});
  responses = j.responses || [];
  if(!dirty){ S = j.state; P = JSON.parse(JSON.stringify(S)); }
}
function renderAdmin(){
  const box = $('#admin');
  if(!PW){
    box.innerHTML = `<h2>회장 전용</h2><div class="card">
      <label class="f">관리자 비밀번호 <input type="password" id="adm-pw" autocomplete="current-password"></label>
      <div class="btns"><button class="primary" id="btn-login">들어가기</button><span id="login-msg" class="note" aria-live="polite"></span></div></div>`;
    return;
  }
  const keep = {}; box.querySelectorAll('textarea[id^="ans-"]').forEach(el => keep[el.id]=el.value);
  const R = [...responses].sort((a,b)=>b.t-a.t);
  let h = `<h2>취합 결과</h2><div class="btns" style="align-items:center"><button class="small" id="btn-refresh">새로고침</button><span class="note">마지막 확인 ${fmtTime(Date.now())}</span></div>`;
  h += `<div class="tiles"><div class="tile"><div class="lbl">응답자</div><div class="n">${R.length}명</div></div>
    <div class="tile"><div class="lbl">질문</div><div class="n">${R.filter(r=>r.q).length}건</div></div>
    <div class="tile bal"><div class="lbl">마지막 제출</div><div class="n" style="font-size:14px">${R.length?fmtTime(R[0].t):'-'}</div></div></div>`;

  if(!R.length){
    h += `<p class="empty">아직 제출된 의견이 없습니다. 동문들이 제출하면 여기에 바로 쌓입니다.</p>`;
  } else {
    h += `<div class="card"><h3>회칙 개정안 의견</h3><div class="legend"><span><i class="dot" style="background:var(--pos)"></i>찬성</span><span><i class="dot" style="background:var(--neg)"></i>반대</span><span><i class="dot" style="background:var(--hold)"></i>보류</span></div><div class="list">`;
    S.bylaw.forEach((x,i) => {
      const c = {yes:0,no:0,hold:0,'':0}; const cm = [];
      R.forEach(r => { const v = (r.b||{})[x.id] || ['','']; c[v[0]||'']++; if(v[1]) cm.push(`${VOTE[v[0]||'']} · ${r.n}(${r.c}): ${v[1]}`); });
      const tot = R.length;
      h += `<div class="item"><b>개정안 ${i+1} · ${esc(x.article)}</b>
        <div class="bar"><i style="width:${c.yes/tot*100}%;background:var(--pos)"></i><i style="width:${c.no/tot*100}%;background:var(--neg)"></i><i style="width:${c.hold/tot*100}%;background:var(--hold)"></i></div>
        <p class="note">찬성 ${c.yes} · 반대 ${c.no} · 보류 ${c.hold}${c['']?` · 미선택 ${c['']}`:''} · 찬성률 ${Math.round(c.yes/tot*100)}%</p>
        ${cm.length?`<details><summary>의견 ${cm.length}건</summary><div class="list" style="margin-top:8px">${cm.map(t=>`<p class="note">${esc(t)}</p>`).join('')}</div></details>`:''}</div>`;
    });
    const bf = R.filter(r=>r.bf);
    if(bf.length) h += `<div class="item"><b>그 밖의 회칙 의견 ${bf.length}건</b>${bf.map(r=>`<p class="note">${esc(r.n)}(${esc(r.c)}): ${esc(r.bf)}</p>`).join('')}</div>`;
    h += `</div></div>`;
    const ar = R.filter(r=>r.ar), pr = R.filter(r=>r.pr);
    h += `<div class="card"><h3>감사 추천 <span class="note">(상위 2명 강조)</span></h3>${rankHTML(tally(R.flatMap(r=>r.a||[])),2)}
      ${ar.length?`<details><summary>추천 이유 ${ar.length}건</summary><div class="list" style="margin-top:8px">${ar.map(r=>`<p class="note">${esc(r.n)}(${esc(r.c)}) → ${esc((r.a||[]).filter(Boolean).join(', '))}: ${esc(r.ar)}</p>`).join('')}</div></details>`:''}</div>`;
    h += `<div class="card"><h3>차기 회장 추천</h3>${rankHTML(tally(R.map(r=>r.p||'')),1)}
      ${pr.length?`<details><summary>추천 이유 ${pr.length}건</summary><div class="list" style="margin-top:8px">${pr.map(r=>`<p class="note">${esc(r.n)}(${esc(r.c)}) → ${esc(r.p)}: ${esc(r.pr)}</p>`).join('')}</div></details>`:''}</div>`;
    const qs = R.filter(r=>r.q);
    h += `<div class="card"><h3>회계·운영 질문</h3>${qs.length ? `<div class="list">${qs.map(r => `<div class="item">
        <div class="lbl">${esc(r.n)} (${esc(r.c)}) · ${fmtTime(r.t)} ${answered(r.key)?'<span class="ok">답변 공개 목록에 있음</span>':''}</div>
        <p style="white-space:pre-wrap">${esc(r.q)}</p>
        ${answered(r.key)?'':`<label class="f">답변 <textarea id="ans-${esc(r.key)}" rows="2"></textarea></label><div class="btns"><button class="small primary" data-answer="${esc(r.key)}">답변 공개 목록에 추가</button></div>`}
      </div>`).join('')}</div>` : `<p class="empty">받은 질문이 없습니다.</p>`}
      <p class="note">답변은 질문자 이름 없이 "기수 동문 질문"으로 회계 공개 화면에 올라갑니다. 화면 아래 <b>공개 내용 저장</b>을 눌러야 동문들에게 보입니다.</p></div>`;
    h += `<div class="card"><h3>응답자 명단 <span class="note">(${R.length}명)</span></h3><div class="tbl"><table><thead><tr><th>이름</th><th>기수</th><th>제출 시각</th><th></th></tr></thead><tbody>
      ${R.map(r=>`<tr><td>${esc(r.n)}</td><td>${esc(r.c)}</td><td style="white-space:nowrap">${fmtTime(r.t)}</td><td><button class="small ghost" data-del="${esc(r.key)}">삭제</button></td></tr>`).join('')}
      </tbody></table></div><p class="note" id="del-msg"></p></div>`;
    h += `<div class="card"><h3>총회 보고용</h3><div class="btns"><button id="btn-sum">결과 요약 복사</button><button id="btn-csv">엑셀(CSV) 내려받기</button></div><p id="exp-msg" class="note" aria-live="polite"></p>
      <p class="note">모든 응답은 구글 스프레드시트의 "응답" 시트에도 한 줄씩 쌓여 있습니다.</p></div>`;
  }
  h += editorHTML();
  box.innerHTML = h;
  for(const [k,v] of Object.entries(keep)){ const el=document.getElementById(k); if(el) el.value=v; }
}

function editorHTML(){
  const inc = P.ledger.filter(r=>r.type==='in').reduce((a,r)=>a+(+r.amount||0),0);
  const exp = P.ledger.filter(r=>r.type==='out').reduce((a,r)=>a+(+r.amount||0),0);
  return `<h2 style="margin-top:12px">동문에게 공개되는 내용 고치기</h2>
  <div class="card"><h3>안내와 마감</h3>
    <label class="f">임원단 이름 <input type="text" id="e-term" value="${esc(P.term)}"></label>
    <label class="f">의견 마감일 <input type="date" id="e-deadline" value="${esc(P.deadline)}"></label>
    <label class="f">첫 화면 안내문 <textarea id="e-notice" rows="5">${esc(P.notice)}</textarea></label>
  </div>
  <div class="card"><h3>회칙 개정안 <span class="note">(${P.bylaw.length}건)</span></h3>
    <p class="note">개정안은 의견을 받기 시작하기 전에 확정해 주세요. 받는 도중 바꾸면 이미 받은 표와 내용이 달라집니다.</p>
    <div class="list">${P.bylaw.map((b,i)=>`<div class="item">
      <div class="btns" style="justify-content:space-between;align-items:center"><span class="tag">개정안 ${i+1}</span><button class="small ghost" data-bdel="${b.id}">삭제</button></div>
      <label class="f">조항·제목 <input type="text" data-bf="${b.id}:article" value="${esc(b.article)}"></label>
      <label class="f">현행 조문 <small>(신설이면 비워두세요)</small><textarea rows="2" data-bf="${b.id}:current">${esc(b.current)}</textarea></label>
      <label class="f">개정안 <textarea rows="2" data-bf="${b.id}:proposed">${esc(b.proposed)}</textarea></label>
      <label class="f">개정 사유 <textarea rows="2" data-bf="${b.id}:reason">${esc(b.reason)}</textarea></label>
    </div>`).join('')}</div>
    <button id="btn-badd">개정안 추가</button>
    <details><summary>현행 회칙 전문 고치기</summary><textarea id="e-bylawtext" rows="10" style="margin-top:8px">${esc(P.bylawText||'')}</textarea></details>
  </div>
  <div class="card"><h3>회계 내역 <span class="note">(${P.ledger.length}건 · 수입 ${won(inc)} · 지출 ${won(exp)} · 잔액 ${won(inc-exp)})</span></h3>
    <div class="row2">
      <label class="f">날짜 <input type="date" id="l-date"></label>
      <label class="f">구분 <select id="l-type"><option value="out">지출</option><option value="in">수입</option></select></label>
    </div>
    <label class="f">내용 <input type="text" id="l-item" placeholder="예: 상반기 장학금"></label>
    <div class="row2">
      <label class="f">항목 <input type="text" id="l-cat" placeholder="예: 회비, 장학금, 경조금" list="cats"></label>
      <label class="f">금액(원) <input type="number" id="l-amount" inputmode="numeric" min="0"></label>
    </div>
    <datalist id="cats">${[...new Set(['회비','입회비','이월금','친목활동','명절선물','장학금','국가고시 응원','대외활동','경조금','정기총회 회식',...P.ledger.map(r=>r.cat).filter(Boolean)])].map(c=>`<option value="${esc(c)}">`).join('')}</datalist>
    <label class="f">비고 <small>(선택) 영수증 보관 여부 등</small><input type="text" id="l-note"></label>
    <div class="btns"><button class="primary" id="btn-ladd">내역 추가</button><span id="l-msg" class="note"></span></div>
    <details><summary>엑셀에서 한꺼번에 붙여넣기</summary>
      <p class="note" style="margin-top:8px">엑셀에서 <b>날짜 · 구분(수입/지출) · 내용 · 항목 · 금액 · 비고</b> 순서의 열을 복사해 붙여넣으세요.</p>
      <textarea id="l-bulk" rows="5" placeholder="2026-04-15	지출	정기총회 회식	정기총회 회식	850000	영수증 있음"></textarea>
      <div class="btns"><button id="btn-lbulk">붙여넣은 내역 추가</button><span id="lb-msg" class="note"></span></div>
    </details>
    ${P.ledger.length?`<div class="tbl"><table><thead><tr><th>날짜</th><th>내용</th><th class="amt">금액</th><th></th></tr></thead><tbody>${[...P.ledger].sort((a,b)=>String(a.date||'').localeCompare(String(b.date||''))).map(r=>`<tr><td style="white-space:nowrap">${esc(r.date)}</td><td>${esc(r.item)} <span class="note">${esc(r.cat||'')}</span></td><td class="amt ${r.type}">${r.type==='in'?'+':'−'}${(+r.amount||0).toLocaleString('ko-KR')}</td><td><button class="small ghost" data-ldel="${r.id}">삭제</button></td></tr>`).join('')}</tbody></table></div>`:''}
  </div>
  <div class="card"><h3>공개 질문과 답변 <span class="note">(${P.qa.length}건)</span></h3>
    ${P.qa.length?`<div class="list">${P.qa.map(x=>`<div class="item">
      <label class="f">질문 <small>${esc(x.who)}</small><textarea rows="2" data-qf="${x.id}:q">${esc(x.q)}</textarea></label>
      <label class="f">답변 <textarea rows="2" data-qf="${x.id}:a">${esc(x.a)}</textarea></label>
      <div class="btns"><button class="small ghost" data-qdel="${x.id}">삭제</button></div></div>`).join('')}</div>`:`<p class="note">위 질문 목록에서 답변을 달면 여기에 쌓입니다.</p>`}
  </div>`;
}
function markDirty(){ dirty++; $('#savebar').hidden = false; $('#savebar-msg').textContent = `저장하지 않은 변경 ${dirty}건`; $('#btn-publish').disabled=false; }

async function publish(){
  const btn = $('#btn-publish'); btn.disabled = true; $('#savebar-msg').textContent = '저장하는 중…';
  try{
    const j = await apiPost({action:'admin_save_state', pw:PW, state:P});
    S = j.state; P = JSON.parse(JSON.stringify(S)); dirty = 0;
    $('#savebar-msg').textContent = '저장했습니다. 동문들 화면에 반영됐습니다.';
    setTimeout(() => { if(!dirty) $('#savebar').hidden = true; }, 2500);
    buildMember(); show();
  }catch(e){ btn.disabled = false; $('#savebar-msg').textContent = ERR[e.code] || '저장하지 못했습니다. 다시 눌러주세요.'; }
}
function summaryText(){
  const R = responses;
  const L = [`${S.org} 사전 의견 수렴 결과 (${fmtTime(Date.now())} 기준, 응답 ${R.length}명)`, ''];
  S.bylaw.forEach((x,i) => { const c={yes:0,no:0,hold:0}; R.forEach(r=>{ const v=((r.b||{})[x.id]||[''])[0]; if(c[v]!==undefined) c[v]++; }); L.push(`회칙 개정안 ${i+1} ${x.article}: 찬성 ${c.yes} / 반대 ${c.no} / 보류 ${c.hold}`); });
  L.push('', '감사 추천:'); tally(R.flatMap(r=>r.a||[])).slice(0,5).forEach(x=>L.push(`  ${x.name} ${x.n}표`));
  L.push('', '차기 회장 추천:'); tally(R.map(r=>r.p||'')).slice(0,5).forEach(x=>L.push(`  ${x.name} ${x.n}표`));
  const inc = S.ledger.filter(r=>r.type==='in').reduce((a,r)=>a+(+r.amount||0),0), exp = S.ledger.filter(r=>r.type==='out').reduce((a,r)=>a+(+r.amount||0),0);
  L.push('', `회계: 수입 ${won(inc)}, 지출 ${won(exp)}, 잔액 ${won(inc-exp)}`, `질문 ${R.filter(r=>r.q).length}건 (공개 답변 ${S.qa.length}건)`);
  return L.join('\n');
}
function csvText(){
  const q = s => '"' + String(s??'').replace(/"/g,'""') + '"';
  const head = ['이름','기수','학과','제출시각', ...S.bylaw.flatMap((x,i)=>[`회칙${i+1} 의견`,`회칙${i+1} 코멘트`]), '회칙 기타','감사추천1','감사추천2','감사 추천이유','회장추천','회장 추천이유','질문'];
  const rows = [...responses].sort((a,b)=>a.t-b.t).map(r => [r.n,r.c,r.d,fmtTime(r.t), ...S.bylaw.flatMap(x=>{ const v=(r.b||{})[x.id]||['','']; return [VOTE[v[0]||''], v[1]]; }), r.bf,(r.a||[])[0],(r.a||[])[1],r.ar,r.p,r.pr,r.q]);
  return '﻿' + [head, ...rows].map(r=>r.map(q).join(',')).join('\r\n');
}
async function copyText(text, msgEl){
  try { await navigator.clipboard.writeText(text); msgEl.textContent = '복사했습니다. 카카오톡이나 문서에 붙여넣으세요.'; msgEl.className='ok'; }
  catch(e){ msgEl.textContent = '복사하지 못했습니다. CSV 내려받기를 이용해 주세요.'; msgEl.className='err'; }
}

/* ---------- 이벤트 ---------- */
document.addEventListener('click', async e => {
  const t = e.target.closest('button,a'); if(!t) return;
  if(t.dataset.go){ location.hash = t.dataset.go; window.scrollTo(0,0); return; }
  if(t.id==='btn-submit') return doSubmit(t);
  if(t.id==='btn-login'){
    const pw = $('#adm-pw').value, m = $('#login-msg'); if(!pw) return;
    t.disabled = true; m.textContent = '확인하는 중…'; m.className='note';
    try{ await apiPost({action:'admin_login', pw}); PW = pw; try{ sessionStorage.setItem('gj-pw', pw); }catch(_){}
      await adminLoad(); show(); }
    catch(err){ m.textContent = ERR[err.code] || ERR.network; m.className='err'; t.disabled = false; }
    return;
  }
  if(!PW) return;
  if(t.id==='btn-refresh'){ t.disabled=true; try{ await adminLoad(); }catch(_){} renderAdmin(); return; }
  if(t.id==='btn-publish') return publish();
  if(t.dataset.del){
    if(t.dataset.confirm!=='1'){ t.dataset.confirm='1'; t.textContent='정말 삭제'; return; }
    try{ await apiPost({action:'admin_delete', pw:PW, key:t.dataset.del}); responses = responses.filter(r=>r.key!==t.dataset.del); renderAdmin(); }
    catch(err){ $('#del-msg').textContent='삭제하지 못했습니다. 다시 시도해 주세요.'; }
    return;
  }
  if(t.dataset.answer){
    const key = t.dataset.answer, r = responses.find(x=>x.key===key), ta = document.getElementById('ans-'+key), a = (ta.value||'').trim();
    if(!a){ ta.focus(); return; }
    P.qa.push({id:uid(), src:key, who:(r.c||'')+' 동문', q:r.q, a, date:new Date().toISOString().slice(0,10)});
    markDirty(); renderAdmin(); return;
  }
  if(t.id==='btn-badd'){ P.bylaw.push({id:'b'+uid(), article:'새 개정안', current:'', proposed:'', reason:''}); markDirty(); renderAdmin(); return; }
  if(t.dataset.bdel){ P.bylaw = P.bylaw.filter(b=>b.id!==t.dataset.bdel); markDirty(); renderAdmin(); return; }
  if(t.dataset.ldel){ P.ledger = P.ledger.filter(r=>r.id!==t.dataset.ldel); markDirty(); renderAdmin(); return; }
  if(t.dataset.qdel){ P.qa = P.qa.filter(r=>r.id!==t.dataset.qdel); markDirty(); renderAdmin(); return; }
  if(t.id==='btn-ladd'){
    const r = {id:uid(), date:$('#l-date').value, type:$('#l-type').value, item:$('#l-item').value.trim(), cat:$('#l-cat').value.trim(), amount:Math.round(+$('#l-amount').value||0), note:$('#l-note').value.trim()};
    if(!r.item || !r.amount){ $('#l-msg').textContent='내용과 금액을 적어주세요.'; $('#l-msg').className='err'; return; }
    P.ledger.push(r); markDirty(); renderAdmin(); $('#l-date').value = r.date; $('#l-type').value = r.type; $('#l-msg').textContent = `추가됨: ${r.item} ${won(r.amount)}`; $('#l-msg').className='ok'; return;
  }
  if(t.id==='btn-lbulk'){
    let n=0, bad=0;
    $('#l-bulk').value.split(/\r?\n/).forEach(line => {
      if(!line.trim()) return; const c = line.split('\t'); if(c.length<5){ bad++; return; }
      const amt = Math.round(+String(c[4]).replace(/[^\d.-]/g,''));
      const date = String(c[0]).trim().replace(/[./]/g,'-').replace(/-(\d)(?=-|$)/g,'-0$1');
      if(!amt){ bad++; return; }
      P.ledger.push({id:uid(), date, type:/수입|입금/.test(c[1])?'in':'out', item:c[2].trim(), cat:(c[3]||'').trim(), amount:Math.abs(amt), note:(c[5]||'').trim()}); n++;
    });
    if(n){ markDirty(); renderAdmin(); }
    const m = $('#lb-msg'); m.textContent = `${n}건 추가${bad?`, 건너뜀 ${bad}줄`:''}`; m.className = n?'ok':'err'; return;
  }
  if(t.id==='btn-sum'){ copyText(summaryText(), $('#exp-msg')); return; }
  if(t.id==='btn-csv'){
    const url = URL.createObjectURL(new Blob([csvText()], {type:'text/csv;charset=utf-8'}));
    const a = document.createElement('a'); a.href = url; a.download = '거제대동문회_의견수렴_결과.csv'; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  }
});
document.addEventListener('input', e => {
  const el = e.target;
  if(el.closest('section[data-view="admin"]')){
    if(!PW || !P) return;
    const map = {'e-term':'term','e-deadline':'deadline','e-notice':'notice','e-bylawtext':'bylawText'};
    if(map[el.id]){ P[map[el.id]] = el.value; markDirty(); return; }
    if(el.dataset.bf){ const [id,f] = el.dataset.bf.split(':'); const b = P.bylaw.find(x=>x.id===id); if(b){ b[f]=el.value; markDirty(); } return; }
    if(el.dataset.qf){ const [id,f] = el.dataset.qf.split(':'); const q = P.qa.find(x=>x.id===id); if(q){ q[f]=el.value; markDirty(); } return; }
    return;
  }
  if(el.id && el.id!=='m-pin'){
    const d = store.get('gj-draft') || {};
    if(el.type==='radio') document.querySelectorAll(`input[name="${el.name}"]`).forEach(r => d[r.id] = r.checked); else d[el.id] = el.value;
    store.set('gj-draft', d);
  }
  if(el.getAttribute('aria-invalid')) el.removeAttribute('aria-invalid');
});
document.addEventListener('change', e => { if(e.target.type==='radio') e.target.dispatchEvent(new Event('input',{bubbles:true})); });
document.addEventListener('keydown', e => { if(e.key==='Enter' && e.target.id==='adm-pw') $('#btn-login').click(); });
window.addEventListener('hashchange', show);
window.addEventListener('beforeunload', e => { if(dirty){ e.preventDefault(); e.returnValue=''; } });

/* ---------- 시작 ---------- */
(async () => {
  try{ const j = await apiGet(); if(j && j.ok && j.state) S = j.state; }catch(e){}
  P = JSON.parse(JSON.stringify(S));
  loaded = true; buildMember(); show();
  let saved = ''; try{ saved = sessionStorage.getItem('gj-pw') || ''; }catch(e){}
  if(saved && API){ try{ PW = saved; await adminLoad(); show(); }catch(e){ PW = ''; show(); } }
})();
})();
