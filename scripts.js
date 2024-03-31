document.addEventListener("DOMContentLoaded", async function () {
    const nameInput = document.getElementById("name-input");
    const submitName = document.getElementById("submit-name");
    const saveCard = document.getElementById("save-card");
    const nameDisplay = document.getElementById("name-display");
    const cardImage = document.getElementById("card-image");
    const loading = document.getElementById("loading");
    let name = ''
    cardImage.load = () => console.log(loading), loading.style.display = 'none', cardImage.hidden = false
    submitName.addEventListener("click", function () {
        name = nameInput.value;
        if (name.trim() !== "") {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            canvas.width = 6250;
            canvas.height = 6936;
            const scale = canvas.width / 800;
            ctx.drawImage(cardImage, 0, 0, 6250, 6936);
            ctx.font = scale * 3 + "em KufamBold";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.shadowColor = "black";
            ctx.shadowOffsetX = 2;
            ctx.shadowOffsetY = 2;
            ctx.shadowBlur = 4;
            ctx.fillText(name, canvas.width / 2, canvas.height * 0.9);
            cardImage.src = canvas.toDataURL("image/png");
        } else {
            alert("الرجاء إدخال اسم قبل المتابعة.");
        }
    });

    saveCard.addEventListener("click", function () {
        if (name !== "") {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            canvas.width = 6250;
            canvas.height = 6936;
            const scale = canvas.width / 800;
            ctx.drawImage(cardImage, 0, 0, 6250, 6936);
            ctx.font = scale * 3 + "em KufamBold";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.shadowColor = "black";
            ctx.shadowOffsetX = 2;
            ctx.shadowOffsetY = 2;
            ctx.shadowBlur = 4;
            ctx.fillText(name, canvas.width / 2, canvas.height * 0.9);
            cardImage.src = canvas.toDataURL("image/png");
            ctx.fillText(name, canvas.width / 2, canvas.height * 0.9);
            const link = document.createElement("a");
            link.setAttribute("download", "بطاقة_التهنئة.png");
            link.href = canvas.toDataURL("image/png");
            link.target = "_blank";
            document.body.appendChild(link);
            link.click();
        } else {
            alert("الرجاء إدخال اسم وعرض البطاقة قبل حفظها.");
        }
    });
});