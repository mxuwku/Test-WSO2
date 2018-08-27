function showEnableAnalyticsMsg() {
    $('.stat-page').html("");
    var msg=  "<div class='alert alert-warning'>"+
            "<p><strong><i class='fa fa-exclamation-circle'></i>" + i18n.t('Not Configured') + "</strong></p>" +
            "<p> <a href='https://docs.wso2.com/display/AM210/Configuring+APIM+Analytics' target='_blank'" +
            "title= '"+i18n.t("WSO2 wiki documentation on APIM Analytics")+"' class='warningLink'>" +
            i18n.t('Refer our documentation to configure API Manager Analytics correctly') + "</a></p>" +
            "</div>";
    $('.stat-page').append($(msg));
}

function showNoDataAnalyticsMsg() {
    $('.stat-page').html("");
    var msg=  "<div class='alert alert-info'>"+
            "<p><strong><i class='fa fa-exclamation-circle'></i>" + i18n.t('Data Publishing Enabled') + "</strong></p>" +
            "<p> " + i18n.t('Generate some traffic to see statistics') + "</p>" +
            "</div>";
    $('.stat-page').append($(msg));
}
