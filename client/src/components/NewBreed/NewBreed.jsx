// import styles from './NewActivity.module.css';
// //import validation from './Validation';


// export default function NewActivity() {


//     return (
//         <div className={styles.container}>
//             <form onSubmit={handleSubmit}>
//                 <label>Nombre: </label>
//                 <input type="text" name="name" />
//                 <p className={styles.errors}>{errors.name}</p>
//                 <br />
//                 <label>Dificultad: </label>
//                 <input type="text" name="difficulty" value={activityData.difficulty} onChange={handleinputChange}/>
//                 <p className={styles.errors}>{errors.difficulty}</p>
//                 <br />
//                 <label>Duración: </label>
//                 <input type="text" name="duration" value={activityData.duration} onChange={handleinputChange}/>
//                 <p className={styles.errors}>{errors.duration}</p>
//                 <br />
//                 <label>Estación: </label>
//                 <select name="season" onChange={handleinputChange}>
//                     <option value="Invierno">Invierno</option>
//                     <option value="Verano">Verano</option>
//                     <option value="Primavera">Primavera</option>
//                     <option value="Otoño">Otoño</option>
//                 </select>
//                 <p className={styles.errors}>{errors.season}</p>
//                 <br />
//                 <label>Países: </label>
//                 <input type="text" name="countries" value={activityData.countries} onChange={handleinputChange}/>
//                 <p className={styles.errors}>{errors.countries}</p>
//                 <br />
//                 <div className={styles.buttonContainer}>
//                     <button type="submit" disabled={buttonDisable()} className={styles.button}>Crear</button>
//                 </div>
                
//             </form>
//         </div>
//     )  
// }