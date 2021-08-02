export function onRenderPerformaceCallback(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) {
    console.log(`Зафиксировано изменение - ${id}, ${phase},
    время, затраченное на рендер зафиксированного обновления - ${actualDuration},
    предполагаемое время рендера всего поддерева без кеширования - ${baseDuration},
    когда React начал рендерить это обновление - ${startTime}, 
    когда React зафиксировал это обновление - ${commitTime},
    Множество «взаимодействий» для данного обновления - ${interactions}.`);
}


export function sendBrowserPerformanceReport(url) {
  postPerformanceData(url, window.performance.toJSON());
}


export function sendUnloadEventPerformanceReport(url) {

  postPerformanceData( url, {  
    unloadEventEnd: window.performance.unloadEventEnd,
    unloadEventStart: window.performance.unloadEventStart
  });
}


export function sendRedirectPerformanceReport(url) {

  postPerformanceData( url, {  
    redirectEnd: window.performance.redirectEnd,
    redirectStart: window.performance.redirectStart
  });
}


export function sendFetchPerformanceReport(url) {

  postPerformanceData( url, {  
    fetchEnd: window.performance.fetchEnd,
    fetchStart: window.performance.fetchStart
  });
}


export function sendDomainLookupPerformanceReport(url) {

  postPerformanceData( url, {  
    domainLookupEnd: window.performance.domainLookupEnd,
    domainLookupStart: window.performance.domainLookupStart
  });
}


export function sendConnectStartPerformanceReport(url) {

  postPerformanceData( url, { 
    connectEnd: window.performance.connectEnd,
    connectStart: window.performance.connectStart
  });
}


export function sendSecureConnectPerformanceReport(url) {

  postPerformanceData( url, { 
    secureConnectionEnd: window.performance.secureConnectionEnd,
    secureConnectionStart: window.performance.secureConnectionStart
  });
}


export function sendRequestPerformanceReport(url) {

  postPerformanceData( url, { 
    requestEnd: window.performance.requestEnd,
    requestStart: window.performance.requestStart
  });
}


export function sendResponcePerformanceReport(url) {

  postPerformanceData( url, {  
    responseEnd: window.performance.responseEnd,
    responseStart: window.performance.responseStart
  });
}


export function sendLoadEventPerformanceReport(url) {

  postPerformanceData( url, { 
    loadEventEnd: window.performance.loadEventEnd,
    loadEventStart: window.performance.loadEventStart
  });
}


async function postPerformanceData(url , data ) {
  const response = await fetch(url, {
    method: 'POST', 
    mode: 'cors', 
    cache: 'no-cache',
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data) 
  });
  return response.json();
}
