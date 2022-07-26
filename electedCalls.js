import axios from 'axios';
import fs from 'fs'
import candidateCommiteeCodes from './values';
import commiteeCodes from './values';

const getCommitteeTotals = async (candidateOrCommitteeArr, monthString) =>{
  let working = []
  let broken = []
  for(let item in candidateOrCommitteeArr){
    try{
      const resp = await axios.get(`https://api.open.fec.gov/v1/committee/${candidateOrCommitteeArr[item]}/totals/?sort_hide_null=false&sort_nulls_last=false&sort_null_only=false&page=1&cycle=2020&cycle=2022&api_key=l7jGDYZq8wLfYgIPyGdm7VPnXShr0FA7lhDbTFX3&per_page=20&sort=-cycle`)
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
  let name 
  if(candidateOrCommitteeArr === candidateArr) name = "CandidateCommitteeTotals"
  if(candidateOrCommitteeArr === committeeArr) name = "CommitteeTotals"
  console.log(`writing...`)
  working = JSON.stringify(working,null,2)
  fs.writeFile(`${name}${monthString}.json`, working, err=>{
    if (err) throw err
  })
  console.log(`Cool! We're done!`)
  console.log(`FYI these didn't work: ${broken}`) 
}

getCommitteeTotals(candidateCommiteeCodes)
getCommitteeTotals(commiteeCodes)