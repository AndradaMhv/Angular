import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  landmarkList = [
    {
      title: 'The Sphinx',
      image:
        'https://travel2next.com/wp-content/uploads/romania-monuments-the-sphinx.jpg',
      description:
        'The Sphinx is a natural Romanian monument on the Bucegi Plateau, eroded over time by wind and rain and eventually resembled a human face.',
      modal:'The Sphinx is at an altitude of 2216m (7270ft), and it is 8m (26ft) tall and 12m (39ft) wide.There are, however, many alternative theories around how this natural formation was created.One theory is the Sphinx is an artefact from a civilisation more advanced than our own.'},
    {
      title: 'Retezat Mountains',
      image:
        'https://travel2next.com/wp-content/uploads/important-landmarks-in-romania-retezat-mountain.jpg',
      description:
        'Part of the Southern Carpathians that run through Romania.The highest peak in the range is Peleaga at 2509m (8232ft).',
      modal:'The range is a must-visit for keen hikers, as it has numerous glacial lakes and pools and densely forested areas.One of the famous lakes in the range is Bucura Lake which is 2030m (6660ft) above sea level.More than a third of all native plant species in Romania thrive within the range, including alpine species such as edelweiss and Swiss pine.'},
    {
      title: 'Bran Castle',
      image:
        'https://travel2next.com/wp-content/uploads/romania-landmarks-bran-castle.jpg',
      description:
        'Bran Castle is perhaps the most famous and most visited historic landmark in Romania. The castle was built in the late 1300s .',
      modal:'Bran Castle is the inspiration behind Bram Stoker’s Dracula castle even though the author never visited Romania.However, it is easy to believe this tale as the castle features many underground passages and ancient weapons, the perfect location to create a monstrous villain.Each year Halloween events are held at the castle to celebrate the famed vampire.'},
    {
      title: 'Bigar Waterfall',
      image:
        'https://travel2next.com/wp-content/uploads/famous-landmarks-in-romania-bigar-waterfall.jpg',
      description:
        'The waterfall is nicknamed "the miracle from the Minis Canyon" and part of the Mini River, within the Anina Mountains. ',
      modal:'The waterfall is unusual in its appearance, as it is rounded and falls over moss-covered rocks resulting in multiple streams of water flowing over the rock.Even though part of the waterfall has collapsed due to erosion, Bigar is still a magical landmark to visit in Romania.Bigar Waterfall is at Caras-Severin.'},
    {
      title: 'Berca Mud Vulcanoes',
      image:
        'https://travel2next.com/wp-content/uploads/romania-natural-landmarks-mud-volcanoes.jpg',
      description:
        'Berca Mud Volcanoes are an incredible and rare geological landmark in Eastern Romania and are located at at Pâclele 127041',
      modal:'As natural gasses rise to the surface, thick mud and salty water begin to bubble.The constant bubbling of the mud has resulted in conical volcanic shapes as the mud dries on the surface.Due to the minerals in both the mud and saltwater, the mud volcanoes range from earth tones to dark yellows.'
    },
    {
      title: 'Scarisoara Cave',
      image:
        'https://travel2next.com/wp-content/uploads/romania-geographical-landmarks-scarisoara-cave.jpg',
      description:
        'Scarisoara Cave is a natural wonder of Romania as it houses the most extensive underground glacier in the country.',
      modal:'Nature created the glacier due to ventilation within the cave, allowing for the perfect climate for glaciers to form.It has served as a tourist destination since 1847 and was extensively charted in 1863.Adolf Schmidlm, an explorer with excellent knowledge of the Apuseni Mountains, made two detailed cave sketches.'
    },
  ];



  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
