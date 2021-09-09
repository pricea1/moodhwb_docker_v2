this["opad"] = this["opad"] || {};
this["opad"]["templates"] = this["opad"]["templates"] || {};
this["opad"]["templates"]["featureBlockOption"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "	<a class=\"feature-block-option-mylist-item__value\" data-json='{\"text\": \""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.option : depth0)) != null ? stack1.text : stack1), depth0))
    + "\", \"url\": \""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.option : depth0)) != null ? stack1.url : stack1), depth0))
    + "\" }' href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.option : depth0)) != null ? stack1.url : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.option : depth0)) != null ? stack1.text : stack1), depth0))
    + "</a>";
},"3":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "\n	<span class=\"feature-block-option-mylist-item__value\" data-json='{\"text\": \""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.option : depth0)) != null ? stack1.text : stack1), depth0))
    + "\" }'>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.option : depth0)) != null ? stack1.text : stack1), depth0))
    + "</span><!--\n-->";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<li class=\"button round feature-block-option-mylist__item\">\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.option : depth0)) != null ? stack1.url : stack1),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "<!--\n--><span class=\"feature-block-option-mylist-delete\"></span>\n</li> ";
},"useData":true});
this["opad"]["templates"]["profileGoalItemCompleted"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "false";
},"3":function(depth0,helpers,partials,data) {
    return "true";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<li data-goal-id=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.goal : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" aria-hidden=\""
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.goal : depth0)) != null ? stack1.isTodo : stack1),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\" class=\"profile-goals__list-item\" data-status=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.goal : depth0)) != null ? stack1.status : stack1), depth0))
    + "\">\n	<div class=\"row\">\n		<div class=\"small-12 column\">\n\n			<span class=\"profile-goals__activity\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.goal : depth0)) != null ? stack1.activity : stack1), depth0))
    + "</span>\n\n			<a href=\"/actions/profiler/goal/reset-activity?goalId="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.goal : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" class=\"btn btn-default btn-sm profile-goal__action-link\" data-goal-action=\"undo\"><span class=\"show-for-sr\">Reset activity</span><span class=\"ss-icon ss-icon-circle ss-replay\"></span></a>\n		</div>\n	</div>\n</li>";
},"useData":true});
this["opad"]["templates"]["profileGoalItemToDo"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "false";
},"3":function(depth0,helpers,partials,data) {
    return "true";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<li data-goal-id=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.goal : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" aria-hidden=\""
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.goal : depth0)) != null ? stack1.isTodo : stack1),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\" class=\"profile-goals__list-item\" data-status=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.goal : depth0)) != null ? stack1.status : stack1), depth0))
    + "\">\n	<div class=\"row\">\n		<div class=\"small-12 column\">\n\n			<span class=\"icon-circle profile-goals__times-completed\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.goal : depth0)) != null ? stack1.timesLeft : stack1), depth0))
    + "</span><span class=\"profile-goals__activity\" id=\"profileGoalActivity\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.goal : depth0)) != null ? stack1.activity : stack1), depth0))
    + "</span>\n\n			<a href=\"/actions/profiler/goal/done-activity?goalId="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.goal : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" class=\"btn btn-default btn-sm profile-goal__action-link\" data-goal-status=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.goal : depth0)) != null ? stack1.status : stack1), depth0))
    + "\" data-times-per-week=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.goal : depth0)) != null ? stack1.timesPerWeek : stack1), depth0))
    + "\" data-times-completed=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.goal : depth0)) != null ? stack1.timesCompleted : stack1), depth0))
    + "\" data-goal-action=\"complete\"><span class=\"show-for-sr\">Complete activity</span><span class=\"ss-icon ss-icon-circle ss-check\"></span></a>\n\n			<a href=\"/actions/profiler/goal/delete-goal?goalId="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.goal : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" class=\"btn btn-default btn-sm profile-goal__action-link\" data-goal-action=\"delete\"><span class=\"show-for-sr\">Delete activity'</span><span class=\"ss-icon ss-icon-circle ss-delete\"></span></a>\n		</div>\n	</div>\n</li>";
},"useData":true});
this["opad"]["templates"]["profileStuffILikeItem"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "	<a class=\"profile-stuff-i-like__user-link\" href=\""
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.stuffILike : depth0)) != null ? stack1.url : stack1), depth0))
    + "\">\n";
},"3":function(depth0,helpers,partials,data) {
    return "		</a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "\n\n<li data-stuff-i-like-id=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.stuffILike : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" class=\"profile-goals__list-item profile-stuff-i-like__list-item\">\n\n	<div class=\"row\">\n	<div class=\"small-12 column\">\n\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.stuffILike : depth0)) != null ? stack1.url : stack1),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "		<span class=\"profile-stuff-i-like__title\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.stuffILike : depth0)) != null ? stack1.title : stack1), depth0))
    + "</span>\n\n		<a href=\"/actions/profiler/stuff-i-like/delete-stuff-i-like?stuffILikeId="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.stuffILike : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" class=\"profile-goal__action-link profile-stuff-i-like__action-link\" data-stuff-i-like-action=\"delete\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.translations : depth0)) != null ? stack1['delete'] : stack1), depth0))
    + "</a>\n		<a href=\"?id="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.stuffILike : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" class=\"profile-goal__action-link profile-stuff-i-like__action-link\" >"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.translations : depth0)) != null ? stack1.edit : stack1), depth0))
    + "</a>\n\n\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.stuffILike : depth0)) != null ? stack1.url : stack1),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n	</div>\n	</div>\n\n</li>\n";
},"useData":true});