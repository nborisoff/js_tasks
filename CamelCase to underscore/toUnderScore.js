const toUnderScore = name => {
    return name.replace(/([A-Z]|\d+)/g, '_$1').replace(/^_/, "").replace(/__/g, "_");
}