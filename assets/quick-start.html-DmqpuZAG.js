import{_ as t,a as s,b as i,c as n,d as o,e as g,f as c,g as m,h as l,i as h,j as _,k as d,l as f,m as u,n as x}from"./49398c0f-9f36-4d3e-a88b-f5450da17cac-bfjL4tev.js";import{_ as b}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as k,o as I,c as v,a,d as p,b as B,e as r}from"./app-n9U_ehLA.js";const N={},V=r('<h2 id="快速开始指引" tabindex="-1"><a class="header-anchor" href="#快速开始指引" aria-hidden="true">#</a> <strong>快速开始指引</strong></h2><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>在快速入门指南中，我们将学习一些关于如何做用户管理和应用程序权限管理的基础知识。然后作为示例，我们将使用平台接入一个基于React的单页应用程序。示例应用程序允许用户使用OIDC协议安全地登录。</p><h2 id="产品术语" tabindex="-1"><a class="header-anchor" href="#产品术语" aria-hidden="true">#</a> <strong>产品术语</strong></h2><p><strong>实例、组织、项目、用户、角色、授权及应用程序</strong></p><p>在产品中，实例、组织、项目、用户、角色和应用程序是构成平台的主要内容。</p><p>上述内容的创建顺序通常如下：</p><ul><li><p><strong>实例</strong>：实例是产品中的顶级实体，代表平台的独立部署。一个实例可以有一个或多个组织。</p></li><li><p><strong>组织</strong>：组织是代表公司/组织在实例中的逻辑分离，一个组织可以有一个或多个项目。默认组织是帐户注册过程开始时提供的组织。通常，一个实例将有一个组织，但在B2B场景中，一个实例将有多个组织。</p></li><li><p><strong>项目</strong>：项目是组织内部的逻辑分离，是其所包含资源的应用程序、角色和授权策略的容器。</p></li><li><p><strong>用户</strong>：用户是在组织层面创建的，并被授予对项目内资源的访问权限。可以为他们分配不同的角色，这定义了他们在项目中拥有的权限和特权。</p></li><li><p><strong>角色</strong>：角色是分配给项目内用户的权限和特权集。</p></li><li><p><strong>授权</strong>：授权策略是在项目级别定义的，这意味着它们适用于项目内的所有资源。这些策略是基于分配给用户的角色来的，它们决定了用户在项目中允许执行的操作范围。</p></li><li><p><strong>应用程序</strong>：应用程序是在项目中开发和管理的应用程序。它们可以是使用项目内资源的客户端应用程序，也可以是为其他应用程序提供资源供其他应用程序使用的后端应用程序。这些应用程序可以使用OIDC或SAML协议来验证用户访问受保护的资源。</p></li></ul><p>上述内容的创建顺序可能因组织的具体需求和要求而异。</p><h2 id="注册租户账号" tabindex="-1"><a class="header-anchor" href="#注册租户账号" aria-hidden="true">#</a> 注册租户账号</h2><p>1、前往</p>',11),A={href:"https://portal-console.energy-envision.com/",target:"_blank",rel:"noopener noreferrer"},C=r('<p><img src="'+t+'" alt="image.png"></p><p>2、您可以通过输入您的电子邮件地址进行注册。输入您的电子邮件地址，完成您的详细信息。然后单击“注册”。</p><p><img src="'+s+'" alt="image.png"></p><p>3、账号创建成功后，如下如所示。</p><p><img src="'+i+'" alt="image.png"></p><p>4、点击“立即登陆”跳转登录页面。</p><p><img src="'+n+'" alt="image.png"></p><p>5、输入用户名后。您现在必须验证您的电子邮件地址。</p><p><img src="'+o+'" alt="image.png"></p><p><img src="'+g+'" alt="image.png"></p><p>6、完成邮箱验证后，通过设置的密码成功登录。进入工作台界面。</p><p><img src="'+c+'" alt="image.png"></p><h2 id="完成实名认证" tabindex="-1"><a class="header-anchor" href="#完成实名认证" aria-hidden="true">#</a> 完成实名认证</h2><p>新注册的管理员账号初始没有进行实名认证，完成认证后将获得额外的能力。例如：添加组织成员、组织内权限管理。</p><p>1、查看账号信息。</p><p><img src="'+m+'" alt="image.png"></p><p>2、显示为未实名认证状态，进入实名认证页提交信息向平台运营申请认证。</p><p><img src="'+l+'" alt="image.png"></p><p><img src="'+h+'" alt="image.png"></p><p>3、点击开始认证按钮，根据要求填写信息然后提交审核。等待平台运营人员审核。</p><p><img src="'+_+'" alt="image.png"></p><p><img src="'+d+'" alt="image.png"></p><h2 id="添加租户成员" tabindex="-1"><a class="header-anchor" href="#添加租户成员" aria-hidden="true">#</a> 添加租户成员</h2><p>1、通过实名认证后，组织管理员从右上角可以看到新增IAM功能项。</p><p><img src="'+f+'" alt="image.png"></p><p>2、进入 IAM模块，通过用户管理添加新的组织成员。</p><p><img src="'+u+'" alt="image.png"></p><h2 id="开通实例" tabindex="-1"><a class="header-anchor" href="#开通实例" aria-hidden="true">#</a> 开通实例</h2><p>独立的实例可以让用户完成体验所有功能。特别是作为平台的拥有者负责运营整个平台、处理关键流程等。配置平台自身基础设置。</p><p>1、初始注册好的账号登录工作台后，可以在工作台看到实例开通提示。</p><p><img src="'+x+'" alt="image.png"></p><p>2、申请开通实例前需要先完成实名认证流程。</p><p>3、完成实名认证后，开始申请开通实例。用户以工单形式发起申请，等待平台处理。</p>',33);function E(L,M){const e=k("ExternalLinkIcon");return I(),v("div",null,[V,a("p",null,[a("a",A,[p("https://portal-console.energy-envision.com/"),B(e)]),p(" 并且点击“立即使用”。")]),C])}const D=b(N,[["render",E],["__file","quick-start.html.vue"]]);export{D as default};
