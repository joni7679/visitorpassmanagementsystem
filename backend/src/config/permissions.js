const rolePermissions = {
    admin: ["*"],
    employee: ["view_request_visitor_list", "approve_visitor", "reject_visitor", "view_profile", "edit_profile", "view_dashboard", "invite_visitor"],
    security: ["scan_pass", "check_in", "check_out", "view_active_visititors", "view_rejected_visitors", "view_dashboard"],
    visitor: ["view_profile", "edit_profile", "view_dashboard", "request_visit", "cancel_visit", "view_visitor_status", "download_pass", "view_visit_history", "view_pass"]
}

module.exports = rolePermissions;

