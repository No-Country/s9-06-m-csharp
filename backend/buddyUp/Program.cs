using buddyUp.Data;
using buddyUp.Helpers;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.Google;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.ApplicationParts;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    //options.UseSqlServer(builder.Configuration["SqlServer:ConnectionString"]
    options.UseNpgsql(builder.Configuration["PostgreSql:ConnectionString"]
    ));

builder.Services.Configure<JwtConfig>(builder.Configuration.GetSection("JWT"));

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
    //options.DefaultScheme = CookieAuthenticationDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(jwt =>
{
    var key = Encoding.ASCII.GetBytes(builder.Configuration["JWT:Secret"]);

    jwt.SaveToken = true;
    jwt.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters()
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(key),
        ValidateIssuer = false, // for DEVELOPING PURPUSES only put false
        ValidateAudience = false, // for DEVELOPING PURPUSES only put false
        RequireExpirationTime = false, // for DEVELOPING PURPUSES only put false --needs to be updated when refresh token is added
        ValidateLifetime = true
    };
});
//builder.Services.AddAuthentication(options =>
//{
//    options.DefaultScheme = CookieAuthenticationDefaults.AuthenticationScheme;
//}).AddCookie(
////    options =>
////{
////    options.LoginPath = "/api/auth/google-login";
////}
//).AddGoogle(googleOptions =>
//{
//    googleOptions.ClientId = builder.Configuration["Google:ClientId"];
//    googleOptions.ClientSecret = builder.Configuration["Google:ClientSecret"];
//});
//    .AddFacebook(facebookOptions =>
//{
//    facebookOptions.ClientId = builder.Configuration["Facebook:ClientId"];
//    facebookOptions.AppSecret = builder.Configuration["Facebook:ClientSecret"];
//    facebookOptions.AccessDeniedPath = "/AccessDeniedPathInfo";
//})


builder.Services.AddIdentity<IdentityUser, IdentityRole>(options =>
options.SignIn.RequireConfirmedEmail = false)
    .AddEntityFrameworkStores<ApplicationDbContext>();

builder.Services.AddScoped<IUserProfileRepository, UserProfileRepository>();
builder.Services.AddScoped<ITagRepository, TagRepository>();
//builder.Services.AddScoped<IProfileRespository, ProfileRespository>();
// puede ser pa?! puede ser?!
//builder.Services.Configure<IdentityOptions>(
//    options =>
//    {
//        options.ClaimsIdentity.UserIdClaimType = ClaimTypes.NameIdentifier;
//        options.ClaimsIdentity.UserIdClaimType = ClaimTypes.Role;
//        options.ClaimsIdentity.UserIdClaimType = ClaimTypes.Email;
//        options.ClaimsIdentity.UserIdClaimType = "Id";
//    });
AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
