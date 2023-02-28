import ProjSlider from "./ProjSlider";

const projData = [
    {url:"../../Images/MusicAppBG.png", title:"Music APP"},
    {url:"../../Images/MusicAppBG.png", title:"Flight APP"},
]

const ProjectData = () => {
  return (
    <div>
      <h1>My Projects</h1>
      <ProjSlider projData={projData}/>
    </div>
  )
}

export default ProjectData;