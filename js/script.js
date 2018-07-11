        function ShowYears(aLink, aYear)
        {var now = new Date(); var years = now.getFullYear() - aYear; if (years == 0) years = 1; var strYears = (years == 1)?" year":" years"; aLink.title = years + strYears;}
