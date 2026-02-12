
function disableAllColors() {
    // Disable all colors selection
    document.querySelectorAll("select").forEach(s => s.disabled = true);
}

/* ---------- GLOBAL ALL ---------- */
document.getElementById("mode_all").addEventListener("change", () => {

    disableAllColors();

    // Uncheck all Upper and lower radio options
    document.querySelectorAll("input[name='upper_type'], input[name='lower_type']")
        .forEach(r => {
            r.checked = false;
        });

    document.getElementById("mode_all").checked = true;
    document.getElementById("global_color").disabled = false;

    // Disable Lower type radio
    document.querySelectorAll("input[name='lower_type']").forEach(r=>{
        r.disabled = true;
    });
});


/* ---------- UPPER RULES ---------- */
document.getElementById("all_upper").addEventListener("change", () => {

    // disableAllColors();
    document.querySelectorAll("select.upper_selection").forEach(s => s.disabled = true);

    document.getElementById("upper_one").disabled = false;

    // Enable Lower type radio
    document.querySelectorAll("input[name='lower_type']").forEach(r=>{
        r.disabled = false;
    });
});

document.getElementById("half_upper").addEventListener("change", () => {

    // disableAllColors();
    document.querySelectorAll("select.upper_selection").forEach(s => s.disabled = true);


    document.getElementById("upper_two_a").disabled = false;
    document.getElementById("upper_two_b").disabled = false;

    // Enable Lower type radio
    document.querySelectorAll("input[name='lower_type']").forEach(r=>{
        r.disabled = false;
    });
});


/* ---------- LOWER RULES ---------- */
document.getElementById("all_lower").addEventListener("change", () => {

    // disableAllColors();
    document.querySelectorAll("select.lower_selection").forEach(s => s.disabled = true);

    document.getElementById("lower_one").disabled = false;
});

document.getElementById("half_lower").addEventListener("change", () => {

    // disableAllColors();
    document.querySelectorAll("select.lower_selection").forEach(s => s.disabled = true);

    document.getElementById("lower_two_a").disabled = false;
    document.getElementById("lower_two_b").disabled = false;
});

