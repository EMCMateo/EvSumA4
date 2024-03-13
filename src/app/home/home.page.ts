import { Component } from '@angular/core';
import { PokeapiService } from '../Services/apiservice.service';
import { Firestore, doc, setDoc, } from '@angular/fire/firestore';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Buscar: number = 0;
  pokemon: string | undefined;
  pokemon_id: number = 0;
  pokemon_n: string = "";
  pokemon_n_2: string = "";
  img: string | undefined;
  type: string = "";
  type2: string = "";
  //xd
  ledstate: any;
  ledStatusBug: boolean = false;
  ledStatusDark: boolean = false;
  ledStatusDragon: boolean = false;
  ledStatusElectric: boolean = false;
  ledStatusFairy: boolean = false;
  ledStatusFire: boolean = false;
  ledStatusFight: boolean = false;
  ledStatusFlying: boolean = false;
  ledStatusGhost: boolean = false;
  ledStatusGrass: boolean = false;
  ledStatusGround: boolean = false;
  ledStatusIce: boolean = false;
  ledStatusNormal: boolean = false;
  ledStatusPoison: boolean = false;
  ledStatusPsychic: boolean = false;
  ledStatusRock: boolean = false;
  ledStatusSteel: boolean = false;
  ledStatusWater: boolean = false;
  rutadelatabla: any;
  rutadelatabla4: any;
  rutadelatabla2: any;
  rutadelatabla3: any;

  constructor(private api: PokeapiService, private db: Firestore) { }

  async getPokemonData(name: any) {

    try {
      let Buscar;
      this.api.getPokemon(this.Buscar).subscribe((async respuesta => {
        this.pokemon = respuesta.name;
        this.pokemon_id = respuesta.id;
        this.pokemon_n = respuesta['types'][0]['type']['name'];
        /*this.pokemon_n_2 = respuesta['types'][1]['type']['name'];
        this.type2 = "";*/
        this.type = this.pokemon_n;
        this.type2 = this.pokemon_n_2;
        this.img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + name + '.png';
        this.img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + this.pokemon_id + '.png';
        console.log(this.pokemon);
        console.log(this.pokemon_n);
        console.log(this.pokemon_n_2);
        console.log(this.pokemon_id);

        this.rutadelatabla = doc(this.db, "pkmns", "bug");
          await setDoc(this.rutadelatabla, { encender: false })
          console.log("BICHO" + this.ledStatusBug);
        
       
          this.rutadelatabla = doc(this.db, "pkmns", "dark");
          await setDoc(this.rutadelatabla, { encender: false })
          console.log("DARK" +this.ledStatusDark);
        
          this.rutadelatabla = doc(this.db, "pkmns", "dragon");
          await setDoc(this.rutadelatabla, { encender: false })
          console.log("Dragon"+this.ledStatusDragon);
        
          this.rutadelatabla = doc(this.db, "pkmns", "electric");
          await setDoc(this.rutadelatabla, { encender: false })
          console.log("electric"+this.ledStatusElectric);
        

          this.rutadelatabla = doc(this.db, "pkmns", "fairy");
          await setDoc(this.rutadelatabla, { encender: false })
          console.log("fairy"+this.ledStatusFairy);

          this.rutadelatabla = doc(this.db, "pkmns", "ghost");
          await setDoc(this.rutadelatabla, { encender: false })
          console.log("ghost"+this.ledStatusGhost);

          this.rutadelatabla = doc(this.db, "pkmns", "fight");
          await setDoc(this.rutadelatabla, { encender: false })
          console.log("fight"+this.ledStatusFight);

          this.rutadelatabla = doc(this.db, "pkmns", "fire");
          await setDoc(this.rutadelatabla, { encender: false })
          console.log("fire"+this.ledStatusFire);

          this.rutadelatabla = doc(this.db, "pkmns", "flying");
          await setDoc(this.rutadelatabla, { encender: false })
          console.log("flying"+this.ledStatusFlying);

          this.rutadelatabla = doc(this.db, "pkmns", "grass");
          await setDoc(this.rutadelatabla, { encender: false })
          console.log("ghost"+this.ledStatusGhost);

          this.rutadelatabla = doc(this.db, "pkmns", "ground");
          await setDoc(this.rutadelatabla, { encender: false })
          console.log("ground"+this.ledStatusGround);
          
          this.rutadelatabla = doc(this.db, "pkmns", "ice");
          await setDoc(this.rutadelatabla, { encender: false })
          console.log("ice"+this.ledStatusIce);

          this.rutadelatabla = doc(this.db, "pkmns", "normal");
          await setDoc(this.rutadelatabla, { encender: false })
          console.log("normal"+this.ledStatusNormal);

          this.rutadelatabla = doc(this.db, "pkmns", "poison");
          await setDoc(this.rutadelatabla, { encender: false })
          console.log("poison"+this.ledStatusPoison);

          this.rutadelatabla = doc(this.db, "pkmns", "psychic");
          await setDoc(this.rutadelatabla, { encender: false })
          console.log("psychic"+this.ledStatusPsychic);

          this.rutadelatabla = doc(this.db, "pkmns", "rock");
          await setDoc(this.rutadelatabla, { encender: false })
          console.log("rock"+this.ledStatusRock);

          this.rutadelatabla = doc(this.db, "pkmns", "steel");
          await setDoc(this.rutadelatabla, { encender: false })
          console.log("steel"+this.ledStatusSteel);

          this.rutadelatabla = doc(this.db, "pkmns", "water");
          await setDoc(this.rutadelatabla, { encender: false })
          console.log("water"+this.ledStatusWater);

        if (this.pokemon_n === 'bug') {
          this.ledStatusBug = !this.ledStatusBug
          this.rutadelatabla = doc(this.db, "pkmns", "bug");
          await setDoc(this.rutadelatabla, { encender: this.ledStatusBug })
          console.log(this.ledStatusBug);
        }
        else if (this.pokemon_n === 'dark') {
          this.ledStatusDark = !this.ledStatusDark
          this.rutadelatabla = doc(this.db, "pkmns", "dark");
          await setDoc(this.rutadelatabla, { encender: this.ledStatusDark })
          console.log(this.ledStatusDark);
        }
        else if (this.pokemon_n === 'dragon') {
          this.ledStatusDragon = !this.ledStatusDragon
          this.rutadelatabla = doc(this.db, "pkmns", "dragon");
          await setDoc(this.rutadelatabla, { encender: this.ledStatusDragon })
          console.log(this.ledStatusDragon);
        }
        else if (this.pokemon_n === 'electric') {
          this.ledStatusElectric = !this.ledStatusElectric
          this.rutadelatabla = doc(this.db, "pkmns", "electric");
          await setDoc(this.rutadelatabla, { encender: this.ledStatusElectric })
          console.log(this.ledStatusElectric);
        }
        else if (this.pokemon_n === 'fairy') {
          this.ledStatusFairy = !this.ledStatusFairy
          this.rutadelatabla = doc(this.db, "pkmns", "fairy");
          await setDoc(this.rutadelatabla, { encender: this.ledStatusFairy })
          console.log(this.ledStatusFairy);
        }
        else if (this.pokemon_n === 'ghost') {
          this.ledStatusGhost = !this.ledStatusGhost
          this.rutadelatabla = doc(this.db, "pkmns", "ghost");
          await setDoc(this.rutadelatabla, { encender: this.ledStatusGhost })
          console.log(this.ledStatusGhost);
        }
        else if (this.pokemon_n === 'fighting') {
          this.ledStatusFight = !this.ledStatusFight
          this.rutadelatabla = doc(this.db, "pkmns", "fight");
          await setDoc(this.rutadelatabla, { encender: this.ledStatusFight })
          console.log(this.ledStatusFight);
        }
        else if (this.pokemon_n === 'fire') {
          this.ledStatusFire = !this.ledStatusFire
          this.rutadelatabla = doc(this.db, "pkmns", "fire");
          await setDoc(this.rutadelatabla, { encender: this.ledStatusFire })
          console.log(this.ledStatusFire);
        }
        else if (this.pokemon_n === 'flying') {
          this.ledStatusFlying = !this.ledStatusFlying
          this.rutadelatabla = doc(this.db, "pkmns", "flying");
          await setDoc(this.rutadelatabla, { encender: this.ledStatusFlying })
          console.log(this.ledStatusFlying);
        }
        else if (this.pokemon_n === 'grass') {
          this.ledStatusGrass = !this.ledStatusGrass
          this.rutadelatabla = doc(this.db, "pkmns", "grass");
          await setDoc(this.rutadelatabla, { encender: this.ledStatusGrass })
          console.log(this.ledStatusGrass);
        }
        else if (this.pokemon_n === 'ground') {
          this.ledStatusGround = !this.ledStatusGround
          this.rutadelatabla = doc(this.db, "pkmns", "ground");
          await setDoc(this.rutadelatabla, { encender: this.ledStatusGround })
          console.log(this.ledStatusGround);
        }
        else if (this.pokemon_n === 'ice') {
          this.ledStatusIce = !this.ledStatusIce
          this.rutadelatabla = doc(this.db, "pkmns", "ice");
          await setDoc(this.rutadelatabla, { encender: this.ledStatusIce })
          console.log(this.ledStatusIce);
        }
        else if (this.pokemon_n === 'normal') {
          this.ledStatusNormal = !this.ledStatusNormal
          this.rutadelatabla = doc(this.db, "pkmns", "normal");
          await setDoc(this.rutadelatabla, { encender: this.ledStatusNormal })
          console.log(this.ledStatusNormal);
        }
        else if (this.pokemon_n === 'poison') {
          this.ledStatusPoison = !this.ledStatusPoison
          this.rutadelatabla = doc(this.db, "pkmns", "poison");
          await setDoc(this.rutadelatabla, { encender: this.ledStatusPoison })
          console.log(this.ledStatusPoison);
        }
        else if (this.pokemon_n === 'psychic') {
          this.ledStatusPsychic = !this.ledStatusPsychic
          this.rutadelatabla = doc(this.db, "pkmns", "psychic");
          await setDoc(this.rutadelatabla, { encender: this.ledStatusPsychic })
          console.log(this.ledStatusPsychic);
        }
        else if (this.pokemon_n === 'rock') {
          this.ledStatusRock = !this.ledStatusRock
          this.rutadelatabla = doc(this.db, "pkmns", "rock");
          await setDoc(this.rutadelatabla, { encender: this.ledStatusRock })
          console.log(this.ledStatusRock);
        }
        else if (this.pokemon_n === 'steel') {
          this.ledStatusSteel = !this.ledStatusSteel
          this.rutadelatabla = doc(this.db, "pkmns", "steel");
          await setDoc(this.rutadelatabla, { encender: this.ledStatusSteel })
          console.log(this.ledStatusSteel); 
        }
        else if (this.pokemon_n === 'water') {
          this.ledStatusWater = !this.ledStatusWater
          this.rutadelatabla = doc(this.db, "pkmns", "water");
          await setDoc(this.rutadelatabla, { encender: this.ledStatusWater })
          console.log(this.ledStatusWater);
        }

      }));
    } catch (error) {
      console.log("error");
    }
  }

   async resetData() {

     try {
      
           this.rutadelatabla = doc(this.db, "pkmns", "bug");
           await setDoc(this.rutadelatabla, { encender: false })
           console.log("BICHO" + this.ledStatusBug);
        
       
           this.rutadelatabla = doc(this.db, "pkmns", "dark");
           await setDoc(this.rutadelatabla, { encender: false })
           console.log("DARK" +this.ledStatusDark);
        
           this.rutadelatabla = doc(this.db, "pkmns", "dragon");
           await setDoc(this.rutadelatabla, { encender: false })
           console.log("Dragon"+this.ledStatusDragon);
        
           this.rutadelatabla = doc(this.db, "pkmns", "electric");
           await setDoc(this.rutadelatabla, { encender: false })
           console.log("electric"+this.ledStatusElectric);
        

           this.rutadelatabla = doc(this.db, "pkmns", "fairy");
           await setDoc(this.rutadelatabla, { encender: false })
           console.log("fairy"+this.ledStatusFairy);

           this.rutadelatabla = doc(this.db, "pkmns", "grass");
           await setDoc(this.rutadelatabla, { encender: false })
           console.log("ghost"+this.ledStatusGhost);

           this.rutadelatabla = doc(this.db, "pkmns", "fight");
           await setDoc(this.rutadelatabla, { encender: false })
           console.log("fight"+this.ledStatusFight);

           this.rutadelatabla = doc(this.db, "pkmns", "fire");
           await setDoc(this.rutadelatabla, { encender: false })
           console.log("fire"+this.ledStatusFire);

           this.rutadelatabla = doc(this.db, "pkmns", "flying");
           await setDoc(this.rutadelatabla, { encender: false })
           console.log("flying"+this.ledStatusFlying);

           this.rutadelatabla = doc(this.db, "pkmns", "ghost");
           await setDoc(this.rutadelatabla, { encender: false })
           console.log("ghost"+this.ledStatusGhost);

           this.rutadelatabla = doc(this.db, "pkmns", "ground");
           await setDoc(this.rutadelatabla, { encender: false })
           console.log("ground"+this.ledStatusGround);
          
           this.rutadelatabla = doc(this.db, "pkmns", "ice");
           await setDoc(this.rutadelatabla, { encender: false })
           console.log("ice"+this.ledStatusIce);

           this.rutadelatabla = doc(this.db, "pkmns", "normal");
           await setDoc(this.rutadelatabla, { encender: false })
           console.log("normal"+this.ledStatusNormal);

           this.rutadelatabla = doc(this.db, "pkmns", "poison");
           await setDoc(this.rutadelatabla, { encender: false })
           console.log("poison"+this.ledStatusPoison);

           this.rutadelatabla = doc(this.db, "pkmns", "psychic");
           await setDoc(this.rutadelatabla, { encender: false })
           console.log("psychic"+this.ledStatusPsychic);

           this.rutadelatabla = doc(this.db, "pkmns", "rock");
           await setDoc(this.rutadelatabla, { encender: false })
           console.log("rock"+this.ledStatusRock);

           this.rutadelatabla = doc(this.db, "pkmns", "steel");
           await setDoc(this.rutadelatabla, { encender: false })
           console.log("steel"+this.ledStatusSteel);

           this.rutadelatabla = doc(this.db, "pkmns", "water");
           await setDoc(this.rutadelatabla, { encender: false })
           console.log("water"+this.ledStatusWater);
        

      
     } catch (error) {
       console.log("error");
     }
   }


}


