import axios from 'axios';
import fs from 'fs'
// import candidateCommiteeCodes from './values.js';
// import commiteeCodes from './values.js'
import candidate from './candidateNames.js'
// import config from './config';

let candidateCommiteeCodes = [
  "C00412890", "C00629949", "C00768705", "C00792945", "C00740100", "C00610451", "C00435974", "C00799221", "C00773069", "C00719294",
  "C00543892", "C00720375", "C00661561", "C00714865", "C00476820", "C00444968", "C00460063", "C00447748", "C00458679", "C00489427",
  "C00466516", "C00721308", "C00553859", "C00589994", "C00583153", "C00632257", "C00548180", "C00702902", "C00725853", "C00786061",
  "C00733329", "C00735985", "C00653220", "C00684266", "C00506931", "C00571521", "C00706788", "C00461822", "C00675348", "C00678813",
  "C00617662", "C00725465", "C00761528", "C00443580", "C00762682", "C00699660", "C00708560", "C00654723", "C00481911", "C00655571",
  "C00350520", "C00721332", "C00376244", "C00614826", "C00547570", "C00571208", "C00571620", "C00578542", "C00752741", "C00501643",
  "C00440727", "C00540617", "C00558262", "C00663914", "C00702951", "C00742007", "C00370056", "C00398750", "C00544031", "C00741090",
  "C00621672", "C00509422", "C00420745", "C00543967", "C00547893", "C00570945", "C00701755", "C00774059", "C00775015", "C00287912",
  "C00697052", "C00558486", "C00551374", "C00444620", "C00658401", "C00680769", "C00671891", "C00697649", "C00657833", "C00477240",
  "C00116632", "C00376038", "C00493221", "C00614214", "C00468579", "C00718346", "C00466482", "C00492058", "C00770636", "C00793349",
  "C00541862", "C00573436", "C00720078", "C00460550", "C00661868", "C00706796", "C00697789", "C00662940", "C00326439", "C00577999",
  "C00650267", "C00550707", "C00416594", "C00778407", "C00582635", "C00588657", "C00672733", "C00544445", "C00569079", "C00368522",
  "C00436386", "C00442368", "C00371203", "C00427401", "C00793166", "C00674259", "C00608398", "C00634774", "C00793505", "C00652743",
  "C00615294", "C00773739", "C00652727", "C00692640", "C00674770", "C00730895", "C00581843", "C00257337", "C00390161", "C00504704",
  "C00686105", "C00636092", "C00420935", "C00428052", "C00541011", "C00662601", "C00728238", "C00552547", "C00573626", "C00763953", 
  "C00726042", "C00599464", "C00376004", "C00386532", "C00732958", "C00376087", "C00565630", "C00708289", "C00658385", "C00668491", 
  "C00687574", "C00779967", "C00503094", "C00498345", "C00376939", "C00409276", "C00723916", "C00612432", "C00548289", "C00808014",
  "C00372532", "C00600718", "C00655332", "C00665752", "C00689893", "C00717959", "C00546499", "C00701102", "C00702456", "C00608695",
  "C00474189", "C00473827", "C00494302", "C00367862", "C00439521", "C00610055", "C00464149", "C00524611", "C00582304", "C00525212",
  "C00694778", "C00750307", "C00461806", "C00303305", "C00363770", "C00633610", "C00493924", "C00496075", "C00502229", "C00504522",
  "C00548818", "C00504019", "C00462374", "C00386748", "C00570770", "C00658708", "C00676957", "C00676965", "C00692327", "C00692343",
  "C00313247", "C00487942", "C00441014", "C00524314", "C00576173", "C00632323", "C00705814", "C00755074", "C00368696", "C00443218",
  "C00572099", "C00498121", "C00632067", "C00649525", "C00680827", "C00790402", "C00662171", "C00482984", "C00497842", "C00730531",
  "C00753384", "C00304758", "C00344648", "C00714741", "C00648295", "C00359034", "C00462556", "C00588822", "C00807537", "C00464073",
  "C00720011", "C00742247", "C00510164", "C00703843", "C00301838", "C00491357", "C00506865", "C00542027", "C00571596", "C00751404",
  "C00394957", "C00467431", "C00568162", "C00477323", "C00614776", "C00492785", "C00536540", "C00542423", "C00713511", "C00652149",
  "C00390724", "C00498360", "C00577973", "C00782581", "C00379735", "C00404392", "C00438481", "C00446815", "C00704270", "C00506048",
  "C00718635", "C00701672", "C00705962", "C00762260", "C00460659", "C00573980", "C00730150", "C00464602",

  "C00784884", "C00711010", "C00770818", "C00788943", "C00793166", "C00770636", "C00765719", "C00718239", "C00784934", "C00735688", 
  "C00803502", "C00781443", "C00781443", "C00784165", "C00783142", "C00787853", "C00766162", "C00774570", "C00775015", "C00782581"
 
]

let commiteeCodes = [
  "C00040279", "C00536573", "C00034785", "C00351015", "C00404483", "C00374447", "C00034157", "C00264770", "C00114694", "C00659474",
  "C00436048", "C00077305", "C00471169", "C00428623", "C00089136", "C00206136", "C00602805", "C00106740", "C00359539",
  "C00435933", "C00107300", "C00172833", "C00413955", "C00293910", "C00016386", "C00004275", "C00004879", "C00364109", "C00252338",
  "C00425686", "C00430413", "C00010868", "C00096842", "C00038604", "C00415026", "C00309146", "C00006080", "C00106146", "C00495002",
  "C00012914", "C00041061", "C00197715", "C00066472", "C00107615", "C00358663", "C00325332", "C00255752", "C00249532", "C00145623",
  "C00081414", "C00034678", "C00414474", "C00251876", "C00197228", "C00144261", "C00093963", "C00010421", "C00010124", "C00382382",
  "C00082917", "C00383463", "C00412098", "C00250753", "C00233056", "C00015552", "C00355677", "C00142711", "C00709816", "C00357863",
  "C00429712", "C00000901", "C00329425", "C00019083", "C00518787", "C00166355", "C00041954", "C00121582", "C00362624", "C00213066",
  "C00148031", "C00397851", "C00333534", "C00410589", "C00082040", "C00426775", "C00430157", "C00035006", "C00121350", "C00085316",
  "C00109819", "C00248716", "C00014019", "C00112896", "C00035535", "C00250068", "C00503680", "C00248849", "C00163832", "C00340943",
  "C00204099", "C00104802", "C00438051", "C00108209", "C00081547", "C00744458", "C00083535", "C00113159", "C00342394", "C00095869",
  "C00082792", "C00458257", "C00035204", "C00438754", "C00363879", "C00496752", "C00121368", "C00502906", "C00002261", "C00068692",
  "C00364455", "C00232843", "C00447565", "C00131607", "C00012328", "C00361253", "C00034132", "C00014555", "C00046474", "C00693002",
  "C00078451", "C00024869", "C00076810", "C00350744", "C00373837", "C00475665", "C00035691", "C00396671", "C00067231", "C00107771",
  "C00583492", "C00284885", "C00325092", "C00332841", "C00032698", "C00332031", "C00022343", "C00135590", "C00144154", "C00128231",
  "C00084491", "C00034405", "C00116145", "C00142299", "C00010983", "C00128512", "C00104299", "C00236489", "C00100321", "C00314997",
  "C00546234", "C00458158", "C00303024", "C00251751", "C00486217", "C00043463", "C00496307", "C00108035", "C00097485", "C00384354",
  "C00227546", "C00430256", "C00457697", "C00337626", "C00004812", "C00455766", "C00341701", "C00113241", "C00444539", "C00009985", 
  "C00379180", "C00126763", "C00413567", "C00040659", "C00420000", "C00170258", "C00092957", "C00300525", "C00490987", "C00109306",
  "C00144766", "C00319723", "C00028787", "C00034272", "C00165472", "C00003855", "C00376343", "C00023028", "C00002238", "C00491589",
  "C00701482", "C00113811", "C00508770", "C00507699", "C00130773", "C00409565", "C00682617", "C00083915", "C00079681", "C00114025",
  "C00244863", "C00202184", "C00480863", "C00089458", "C00488080", "C00219444", "C00188011", "C00076182", "C00004101", "C00668921",
  "C00097865", "C00297739", "C00064774", "C00009282", "C00024281", "C00088591", "C00239848", "C00379628", "C00083857", "C00349902",
  "C00002790", "C00215384", "C00304477", "C00045781", "C00163212", "C00236778", "C00034355", "C00135459", "C00373217", "C00673368", 
  "C00016683", "C00177469", "C00513549", "C00279497", "C00237065", "C00034298", "C00450239", "C00498154", "C00097568", "C00432252",
  "C00256453", "C00518910", "C00300418", "C00431312", "C00546119", "C00457366", "C00013961", "C00374355", "C00378950", "C00120030",
  "C00300426", "C00128678", "C00144774", "C00360669", "C00389403", "C00349225", "C00060087", "C00576470", "C00589119", "C00119354",
  "C00114447", "C00215012", "C00393728", "C00001214", "C00123612", "C00193631", "C00002972", "C00755454", "C00007880", "C00033779", 
  "C00542365", "C00335091", "C00499400", "C00002881", "C00386524", "C00169821", "C00488882", "C00457754", "C00010470", "C00040725",
  "C00063586", "C00274431", "C00185520", "C00177436", "C00064766", "C00383661", "C00308478", "C00164145", "C00109546", "C00186288",
  "C00332395", "C00226548", "C00093054", "C00034595", "C00426569", "C00254847", "C00446674", "C00007948", "C00417634", "C00147173",
  "C00065219",  "C00399386"
]

const config = {
  apiKey: 'l7jGDYZq8wLfYgIPyGdm7VPnXShr0FA7lhDbTFX3'
}

const getCommitteeTotals = async (candidateOrCommitteeArr, fileName) =>{
  let working = []
  let broken = []
  for(let item in candidateOrCommitteeArr){
    try{
      const resp = await axios.get(`https://api.open.fec.gov/v1/committee/${candidateOrCommitteeArr[item]}/totals/?sort_hide_null=false&sort_nulls_last=false&sort_null_only=false&page=1&cycle=2020&cycle=2022&cycle=2024&api_key=${config.apiKey}&per_page=20&sort=-cycle`)
      for(let call of resp.data.results){
        if(Object.keys(call).length){
          working.push(call)
        }
        console.log(`Pushed ${candidateOrCommitteeArr[item]}`)
      }
      console.log(`Added ${(item*1)+1}, ${candidateOrCommitteeArr.length-(item*1+1)} left!`)
    }
    catch{
      broken.push(candidateOrCommitteeArr[item])
      console.log(`${candidateOrCommitteeArr[item]} didn't work`)
    }
  }
  console.log(`writing...`)
  working = JSON.stringify(working,null,2)
  fs.writeFile(`${fileName}`, working, err=>{
    if (err) throw err
  })
  console.log(`Cool! We're done!`)
  console.log(`FYI these didn't work: ${broken}`) 
}

const getCandidate = async (candidateArr) =>{
  let working = []
  let broken = []
  for(let item in candidateArr){
    console.log('Trying: ',candidateArr[item], item)
    let newItem = candidateArr[item].replace(' ', "%20")
    try{
      const resp = await axios.get(`https://api.open.fec.gov/v1/candidates/?candidate_status=C&sort_nulls_last=false&q=${newItem}&sort_hide_null=false&sort_null_only=false&api_key=DEMO_KEY&per_page=20&page=1&election_year=2024`, {headers:{
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*"
      }})
      if(resp.status === 429){
        console.log('Oh! Too Many Requests at: ', candidateArr[item])
        break
      }
      if(resp.status === 200){
        console.log("Candidate: ", candidateArr[item], "=> ", resp.status)
        for(let call of resp.data.results){
          if(Object.keys(call).length){
            working.push(call)
            console.log(`Pushed ${candidateArr[item]}`)
          }
        }
      }
      else{
        console.log(candidateArr[item], " gave a status error!")
        break
      }
    }
    catch{
      broken.push(candidateArr[item])
    }
  }
  if (working.length > 0){
    console.log('writing...')
  }
  working = JSON.stringify(working, null,2)
  fs.writeFile('Candidate_C.json', working,err=>{
    if (err) throw err
  })
}
// getCandidate(candidate)

const getData = async() =>{
  await axios.get(`https://api.open.fec.gov/v1/candidates/?candidate_status=C&sort_nulls_last=false&q=majewski&sort_hide_null=false&sort_null_only=false&api_key=DEMO_KEY&per_page=20&page=1&election_year=2024`, {headers:{
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*"
  }})
    .then(resp => console.log(resp))
    .catch(error => console.log(error))
}


console.log(candidate)
// getData()
// getCommitteeTotals(['C00399386'],'one.json')
 












//getCommitteeTotals(candidateCommiteeCodes,'CandidateCommitteTotals')
//getCommitteeTotals(commiteeCodes, 'CommitteeCodes')

// const getCommitteeStates = async(arr) =>{
//   let working = []
//   let broken = []
//   // for(let item in candidateOrCommitteeArr){
//   //   try{
//   //     const resp = await axios.get(`https://api.open.fec.gov/v1/committee/${candidateOrCommitteeArr[item]}/totals/?sort_hide_null=false&sort_nulls_last=false&sort_null_only=false&page=1&cycle=2020&cycle=2022&api_key=${config.apiKey}&per_page=20&sort=-cycle`)
//   //     for(let call of resp.data.results){
//   //       if(Object.keys(call).length){
//   //         working.push(call)
//   //       }
//   //       console.log(`Pushed ${candidateOrCommitteeArr[item]}`)
//   //     }
//   //     console.log(`Added ${(item*1)+1}, ${candidateOrCommitteeArr.length-(item*1+1)} left!`)
//   //   }
//   //   catch{
//   //     broken.push(candidateOrCommitteeArr[item])
//   //     console.log(`${candidateOrCommitteeArr[item]} didn't work`)
//   //   }
//   // }
//   for (let item of arr){
   
//     try{
//       const resp = await axios.get(`https://api.open.fec.gov/v1/committees/?committee_id=${item}&sort_hide_null=false&sort_nulls_last=false&page=1&per_page=20&sort=name&api_key=l7jGDYZq8wLfYgIPyGdm7VPnXShr0FA7lhDbTFX3&sort_null_only=false`)
//       working.push(resp.data.results)
//       console.log(`Pushed ${item}`)
//     }
//     catch{
//       broken.push(arr[item])
//     }
//   }  
//   console.log(`writing...`)
//   working = JSON.stringify(working,null,2)
//   fs.writeFile(`CommitteeStates.json`, working, err=>{
//     if (err) throw err
//   })
//   console.log(`Cool! We're done!`)
//   console.log(`FYI these didn't work: ${broken}`) 
//   console.log(working)
// }
// getCommitteeStates(commiteeCodes)