import PropTypes from "prop-types"

function Iten({itenId = -1, itenName = "sem nome", itenImg = ["não encontrada", "nenhuma imagem encontrada"]}) {

    function showImg(itenId) {
        document.getElementById("iten-" + itenId).firstChild.classList.add("show-big")
      }
    function hiddeImg(itenId) {
        document.getElementById("iten-" + itenId).firstChild.classList.remove("show-big")
      }

    return(
        <div id={"iten-" + itenId} className="iten">
            <img onClick={() => hiddeImg(itenId)} src={itenImg[0]} alt={itenImg[1]} />
            <h3>{itenName}</h3>
            <button onClick={() => showImg(itenId)}>ver</button>
        </div>
    )
}

Iten.proptypes = {
    itenId: PropTypes.number,
    itenName: PropTypes.string,
    itenImg: PropTypes.arrayOf(PropTypes.string)
}

export default Iten