function Bread() {
    return (
      <div>
        <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page">Home</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item">Home</li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item">>Home</li>
    <li class="breadcrumb-item">Library</li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
      </div>
    );
  }
  
  export default Bread;
  