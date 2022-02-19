import Listsiswa from './Listsiswa';

function Siswa() {

    const nama=['fance','satria','tara']
    return (
      <div className="App">
        <Listsiswa judul={nama} />
      </div>
    );
  }
  
  export default Siswa;
  